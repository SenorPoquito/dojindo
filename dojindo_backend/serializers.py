from rest_framework import serializers
from dojindo_backend.models import User
from dojindo_backend.models import Collection
from dojindo_backend.models import Volume

class VolumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volume
        fields = ('id','volume_name','volume_number')

class CollectionSerializer(serializers.ModelSerializer):
    volume_set = VolumeSerializer(many=True,read_only=True)
    class Meta:
        model = Collection
        fields = ('id','series_name','author_user','volume_set','category')


class UserSerializer(serializers.ModelSerializer):
    """
    Serializing all the Users
    """
    collection_set = CollectionSerializer(many=True,read_only=True)
    class Meta:
        model = User
        fields = ('id','user_name','email','collection_set')
