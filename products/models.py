from django.db import models
from crum import get_current_user

# Create your models here.

class Product(models.Model):
    title = models.CharField(unique=True, max_length=255)
    category = models.ForeignKey('products.Category', on_delete=models.SET_NULL, blank=True, null=True)
    description = models.TextField()
    price = models.FloatField()
    images = models.TextField()
    updated_at = models.DateTimeField(auto_now=True, editable=False)
    created_by_user = models.ForeignKey('users.User', on_delete=models.RESTRICT, editable=False)

    def __str__(self):
        return str(self.title)

    def save(self, *args, **kwargs):
        user = get_current_user()
        self.created_by_user = user
        super(Product, self).save(*args, **kwargs)

    class Meta:
        verbose_name_plural = "Products"

class Category(models.Model):
    name = models.CharField(unique=True, max_length=255)
    date_time = models.DateTimeField(auto_now=True)
    created_by_user = models.ForeignKey('users.User', on_delete=models.RESTRICT, editable=False)

    def __str__(self):
        return str(self.name)

    def save(self, *args, **kwargs):
        user = get_current_user()
        self.created_by_user = user
        super(Category, self).save(*args, **kwargs)

    class Meta:
        verbose_name_plural = "Categories"