from django.db import models

# Create your models here.
class Eproduct(models.Model):
    eproductID = models.AutoField(primary_key=True)
    brandName = models.CharField(max_length=100)
    productName = models.CharField(max_length=100)
    productType = models.CharField(max_length=100)
    productPrice = models.CharField(max_length=100)
    productCompany = models.CharField(max_length=100)
