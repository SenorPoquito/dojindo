"""dojindo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Import the include() function: from django.conf.urls import url, include
    3. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import url
from django.contrib import admin
from django.conf.urls import include
from rest_framework.urlpatterns import format_suffix_patterns
from dojindo_backend.views import UserViewSet
from dojindo_backend.views import CollectionViewSet
from dojindo_backend.views import VolumeViewSet
from dojindo_backend.views import FollowViewSet
from dojindo_backend.views import PurchaseViewSet

from rest_framework import routers

router = routers.SimpleRouter()

router.register(r'users',UserViewSet)
router.register(r'collections',CollectionViewSet)
router.register(r'volumes',VolumeViewSet)
router.register(r'follows',FollowViewSet)
router.register(r'purchases',PurchaseViewSet)


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # url(r'^api/v1/users/(?P<user_name>[0-9]+)/$', views.UserDetail.as_view())
    url(r'^api/v1/', include(router.urls)),
]
# urlpatterns += router.urls
