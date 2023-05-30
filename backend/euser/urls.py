from django.urls import path
from .views import EuserView

urlpatterns = [
    path('eusers/',EuserView.as_view()),
    path('eusers/<int:pk>/',EuserView.as_view()),
]
