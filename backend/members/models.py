# models.py
from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    status = models.BooleanField(default=False)
    userType = models.CharField(max_length=150,default="user")
    def __str__(self):
        return self.email
