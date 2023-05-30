from django.urls import path
from .views import EproductView

urlpatterns = [
    path('api/',EproductView.as_view()),
    path('api/<int:pk>',EproductView.as_view())
]
