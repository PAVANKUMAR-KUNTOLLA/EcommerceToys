from django.urls import path
from .views import *

urlpatterns = [
    path('', index),
    path('api/v1/products/', products),
    path('api/v1/edit_product/', edit_product),
]