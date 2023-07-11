from django.db import models
from crum import get_current_user
from django.contrib.auth.models import AbstractUser


ROLE_CHOICES = (
        ('customer', 'is_customer'),
        ('retailer', 'is_retailer'),
        ('admin', 'is_admin'),
    )

# Create your models here.
class User(AbstractUser):
    email = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    username = None
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']
    
    role = models.CharField(max_length=100, choices=ROLE_CHOICES)
    updated_at = models.DateTimeField(auto_now=True, editable=False)
    account_terminated = models.BooleanField(default=False, editable=False)
    products = models.ManyToManyField('products.Product', blank=True, related_name="users_products")

    is_verified = models.BooleanField(default=False)
    verified_at = models.DateTimeField(null=True, blank=True, editable=False)
    verified_by = models.ForeignKey('self', on_delete=models.RESTRICT, blank=True, null=True, related_name='verified_by_user', editable=False)

    def __str__(self):
        return self.email

    def users_return(self):
        return User.objects.filter(account_terminated=False)

    def save(self, *args, **kwargs):
        user = get_current_user()
        
        ins_old = User.objects.filter(id=self.id)
        if ins_old:
            is_verified_ins_old = User.objects.get(id=self.id).is_verified

            if is_verified_ins_old != self.is_verified:

                if self.is_verified:
                    self.verified_by = user
                    self.verified_at = datetime.datetime.now()
                    self.is_active = True

                    # Mail TRigger
                    subject = 'User Activated - Warehouse Benchmarking Tool Demo'
                    message = f'"This is an Automated Mail" \n\nHi {self.name}, \nYour user account for the Ecommerce Toys has been activated! You can login now.'
                    from_email = DEFAULT_FROM_EMAIL
                    to = [self.email, ]
                    email = EmailMessage(subject, message, from_email, to)
                    email.send()

                else:
                    self.verified_by = None
                    self.verified_at = None
                    self.is_active = False

        if not self.is_verified:
            self.is_active = False

        if not self.is_active:
            token_ins = Token.objects.filter(user_id=self.id)
            if token_ins:
                token_ins.delete()

        super(User, self).save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        self.account_terminated = True
        self.is_active = False
        super(User, self).save(*args, **kwargs)


def get_file_path(instance, filename):
    return f'NotificationFiles/{instance.id}_{filename}'

class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
    date_time = models.DateTimeField(auto_now=True)

    NOTIFY_CHOICES = (
        ('global_user_alert', 'global_user_alert'),
        ('notification', 'notification'),
    )
    notify_type = models.CharField(max_length=100, choices=NOTIFY_CHOICES)
    # input_file = models.FileField(blank=True, null=True, upload_to=get_file_path)
    is_new_notification = models.BooleanField(default=True)

    def __str__(self):
        return str(self.message)
