from dojindo_backend.models import User
from dojindo_backend.models import Collection
from dojindo_backend.models import Volume

from dojindo_backend.serializers import UserSerializer
from dojindo_backend.serializers import CollectionSerializer
from dojindo_backend.serializers import VolumeSerializer
from rest_framework.renderers import JSONRenderer

user_data = User.objects.all()

serialized = UserSerializer(user_data,many=True)

json = JSONRenderer().render(serialized.data)

text_file = open("output.txt","w")
text_file.write(json)
text_file.close()
