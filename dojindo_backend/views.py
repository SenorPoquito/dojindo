from django.shortcuts import render

from dojindo_backend.models import User
from dojindo_backend.models import Collection
from dojindo_backend.models import Volume
from dojindo_backend.serializers import UserSerializer
from dojindo_backend.serializers import CollectionSerializer
from dojindo_backend.serializers import VolumeSerializer

from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics

# Create your views here.

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
