from django.contrib import admin

from .models import User
from .models import Collection
from .models import Follow
from .models import Favourite
from .models import Purchase
from .models import Volume
from .models import Category
from .models import ReferenceWork


# Register your models here.
admin.site.register(User)
admin.site.register(Collection)
admin.site.register(Follow)
admin.site.register(Favourite)
admin.site.register(Purchase)
admin.site.register(Volume)
admin.site.register(Category)
admin.site.register(ReferenceWork)
