from django.db import models

# Create your models here.
class Euser(models.Model):
    euserId = models.AutoField(primary_key=True)
    FirstName = models.CharField(max_length=100)
    LastName = models.CharField(max_length=100)
    MobileNo = models.CharField(max_length=100)
    Email = models.CharField(max_length=100)
    Address = models.CharField(max_length=100)
