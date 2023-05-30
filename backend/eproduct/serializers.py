from rest_framework import serializers
from .models import Eproduct

class EproductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Eproduct
        fields = ('eproductID','brandName','productName','productType','productPrice','productCompany')