from django.shortcuts import render
from managers.models import Users
from managers.serializers import UsersSerializer
from rest_framework import generics
class UsersListCreate(generics.ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer

