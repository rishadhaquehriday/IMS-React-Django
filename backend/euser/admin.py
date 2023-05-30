from django.contrib import admin
from .models import Euser
# Register your models here.

class EuserAdmin(admin.ModelAdmin):
    list_display = ['euserId','FirstName','LastName','MobileNo','Email','Address']
    
admin.site.register(Euser,EuserAdmin)
