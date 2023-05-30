
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('euser.urls')),
    path('product/',include('eproduct.urls')),
]
