from rest_framework import serializers
from dojindo_backend.models import User
from dojindo_backend.models import Collection
from dojindo_backend.models import Volume
from dojindo_backend.models import Follow
from dojindo_backend.models import Purchase
from dojindo_backend.models import Category
from dojindo_backend.models import ReferenceWork

class VolumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volume
        fields = ('id','name','number','description','cost','samplePage','cover_art','zip_file','collection','updated','created')

class CollectionSerializer(serializers.ModelSerializer):
    #volume_set = VolumeSerializer(many=True,read_only=True)
    #author_user = serializers.StringRelatedField(read_only=False)
    volume_set = VolumeSerializer(many=True,read_only=True)
    class Meta:
        model = Collection
        fields = ('id','author','name','description','cover_art','volume_set','category','referenceWork','updated','created')

class UserSerializer(serializers.ModelSerializer):
    """
    Serializing all the Users with all details
    """

    class Meta:
        model = User
        fields = ('name','email','updated','created')

class UserSerializerFull(serializers.ModelSerializer):
    """
    Serializing all the Users with all details
    """
    collection_set = CollectionSerializer(many=True,read_only=True)
    class Meta:
        model = User
        fields = ('name','email','collection_set','updated','created')

class FollowSerializer(serializers.ModelSerializer):
    follower_user = serializers.StringRelatedField(read_only=True)
    following_user = serializers.StringRelatedField(read_only=True)
    class Meta:
        model = Follow
        fields = ('id','follower_user','following_user','updated','created')

class PurchaseSerializer(serializers.ModelSerializer):
    purchased_volume = VolumeSerializer()
    class Meta:
        model = Purchase
        fields = ('id','purchased_volume','purchase_user','updated','created')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id','name','updated','created')

class ReferenceWorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReferenceWork
        fields = ('name','updated','created')
