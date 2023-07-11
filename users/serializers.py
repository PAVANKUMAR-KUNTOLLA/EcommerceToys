from django.contrib.auth import authenticate
from django.utils.translation import gettext_lazy as _
from django.conf import settings
from rest_framework import serializers

from .models import ROLE_CHOICES
import datetime

class SignupSerializer(serializers.Serializer):
    email = serializers.CharField(required=True)
    password = serializers.CharField(required=True)
    name = serializers.CharField(required=True)
    role = serializers.ChoiceField(choices=[each[0] for each in ROLE_CHOICES], required=True)

    def validate_email(self, email):
        is_valid_email = False
        for domain in settings.VALID_EMAIL_DOMAIN:
            if email.endswith('@{0}'.format(domain)):
                is_valid_email = True
        if not is_valid_email:
            raise Exception('Please use your official email for registration.')
            
        if User.objects.filter(email__iexact=email).exists():
            raise Exception('This user already exists. Please sign in.')
        return str(email).strip().lower()

    def save(self):
        name = self.validated_data['name']
        email = self.validated_data['email']
        role = self.validated_data['role']
        password = self.validated_data['password']

        user = User.objects.create(name=name, email=email)
        user.is_active = False
        user.set_password(password)

        user.save()
        return user

class AuthenticationSerializer(serializers.Serializer):

    email = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        email = attrs['email']
        password = attrs['password']
        if email and password:
            user = authenticate(request=self.context['request'], email=str(email).strip().lower(), password=password)
            print(user)
            if not user:
                msg = _('Unable to log in with provided credentials.')
                raise serializers.ValidationError(msg, code='authorization')

            if not user.is_active:
                msg = _('User is set Not Active')
                raise serializers.ValidationError(msg, code='authorization')

        else:
            msg = _('Must include "username" and "password".')
            raise serializers.ValidationError(msg, code='authorization')
        attrs['user'] = user
        return attrs

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email','role')