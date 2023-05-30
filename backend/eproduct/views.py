from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import EproductSerializer
from django.http import JsonResponse,Http404
from .models import Eproduct

class EproductView(APIView):
    
    def post(self,request):
        data = request.data
        serializer = EproductSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Product Created Successfully',safe=False)
        return JsonResponse('Product Creation Failed',safe=False)
    
    def get_product(self,pk):
        try:
            data = Eproduct.objects.get(eproductID = pk)
            return data
        except Eproduct.DoesNotExist():
            return Http404
    
    
    def get(self,pk=None):
        if pk:
            data = self.get_product(pk)
            serializer = EproductSerializer(data)
            return Response(serializer.data)
        else:
            data = Eproduct.objects.all()
            serializer = EproductSerializer(data,many=True)
            return Response(serializer.data)
            
    def put(self,request,pk=None):
        existingdata = Eproduct.objects.get(eproductID = pk) 
        serializer = EproductSerializer(instance=existingdata,data = request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Product Updated Successfully',safe=False)
        return JsonResponse('Product Update Failed',safe=False)
    
    def delete(self,pk=None):
        getProduct = Eproduct.objects.get(eproductID = pk)
        getProduct.delete()
        return JsonResponse('Product Deleted Successfully',safe=False)