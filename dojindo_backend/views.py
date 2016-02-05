from django.shortcuts import render

from dojindo_backend.models import User
from dojindo_backend.models import Collection
from dojindo_backend.models import Follow
from dojindo_backend.models import Volume
from dojindo_backend.models import Purchase
from dojindo_backend.models import Category
from dojindo_backend.models import ReferenceWork

from dojindo_backend.serializers import UserSerializer
from dojindo_backend.serializers import UserSerializerFull
from dojindo_backend.serializers import CollectionSerializer
from dojindo_backend.serializers import VolumeSerializer
from dojindo_backend.serializers import FollowSerializer
from dojindo_backend.serializers import PurchaseSerializer
from dojindo_backend.serializers import CategorySerializer
from dojindo_backend.serializers import ReferenceWorkSerializer

from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework import viewsets

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializerFull

class CollectionViewSet(viewsets.ModelViewSet):
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer

class VolumeViewSet(viewsets.ModelViewSet):
    queryset = Volume.objects.all()
    serializer_class = VolumeSerializer

class ReferenceWorkViewSet(viewsets.ModelViewSet):
    queryset = ReferenceWork.objects.all()
    serializer_class = ReferenceWorkSerializer

class FollowViewSet(viewsets.ModelViewSet):
    queryset = Follow.objects.all()
    serializer_class = FollowSerializer

class PurchaseViewSet(viewsets.ModelViewSet):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
