from django.contrib import admin
from .models import Eproduct
# Register your models here.
class EproductAdmin(admin.ModelAdmin):
    list_display = ['eproductID','brandName','productName','productType','productPrice','productCompany']
    
admin.site.register(Eproduct,EproductAdmin)