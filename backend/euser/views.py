from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Euser
from .serializers import EuserSerializer
from django.http.response import JsonResponse,Http404
# Create your views here.

class EuserView(APIView):
    
    def post(self,request):
        data = request.data
        serializer = EuserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Ecom-User Created Successfully", safe=False)
        return JsonResponse("Failed to Add Ecom-User", safe= False)
    
    def get_euser(self,pk):
        try:
            euser = Euser.objects.get(euserId = pk)
            return euser
        except Euser.DoesNotExist():
              raise Http404
            
    def get(self,request,pk=None):
        if pk:
            data = self.get_euser(pk)
            serializer = EuserSerializer(data)
            return Response(serializer.data)
        else:
            data = Euser.objects.all()
            serializer = EuserSerializer(data,many=True)
            return Response(serializer.data)
        
        
    def put(self,request,pk=None):
        euser_to_update = Euser.objects.get(euserId = pk)
        serializer = EuserSerializer(instance=euser_to_update,data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Ecom-user Updated Successfully',safe=False)
        return JsonResponse('Failed To Update Ecom-User')
    
    def delete(self,request,pk=None):
        euser_to_update = Euser.objects.get(euserId = pk)
        euser_to_update.delete()
        return JsonResponse('Ecom-User Deleted Successfully',safe=False)
        
    
            