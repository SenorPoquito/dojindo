from rest_framework import serializers
from dojindo_backend.models import User
from dojindo_backend.models import Collection
from dojindo_backend.models import Volume
from dojindo_backend.models import Follow
from dojindo_backend.models import Purchase
from dojindo_backend.models import Category


class VolumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volume
        fields = ('id','volume_name','volume_number','collection')

class CollectionSerializer(serializers.ModelSerializer):
    #volume_set = VolumeSerializer(many=True,read_only=True)
    #author_user = serializers.StringRelatedField(read_only=False)
    volume_set = VolumeSerializer(many=True,read_only=True)
    class Meta:
        model = Collection
        fields = ('id','series_name','author_user','volume_set','category')

class UserSerializer(serializers.ModelSerializer):
    """
    Serializing all the Users with all details
    """

    class Meta:
        model = User
        fields = ('user_name','email')

class UserSerializerFull(serializers.ModelSerializer):
    """
    Serializing all the Users with all details
    """
    collection_set = CollectionSerializer(many=True,read_only=True)
    class Meta:
        model = User
        fields = ('user_name','email','collection_set')

class FollowSerializer(serializers.ModelSerializer):
    follower_user = serializers.StringRelatedField(read_only=True)
    following_user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Follow
        fields = ('id','follower_user','following_user')

class PurchaseSerializer(serializers.ModelSerializer):
    purchased_volume = VolumeSerializer()
    class Meta:
        model = Purchase
        fields = ('id','purchased_volume','purchase_user')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id','name')
