from rest_framework import serializers
from .models import Euser

class EuserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Euser
        fields = ('euserId','FirstName','LastName','MobileNo','Email','Address')