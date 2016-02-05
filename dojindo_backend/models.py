from __future__ import unicode_literals
from django.db import models
from django.utils import timezone
from django.utils.encoding import smart_unicode, smart_unicode
# Create your models here.

class User(models.Model):
    name = models.CharField(
        max_length=255,
        primary_key=True,
    )
    email = models.EmailField()
    updated = models.DateTimeField(
        auto_now=True,
        null=True,
    )
    created = models.DateTimeField(
        null=True,
        auto_now_add=True,
    )
    def __unicode__(self):
        return smart_unicode(self.name)

    def __unicode__(self):
        return smart_unicode(self.name)

class ReferenceWork(models.Model):
    name = models.CharField(
        max_length = 255,
        primary_key =True
    )
    updated = models.DateTimeField(
        auto_now=True,
        null=True,
    )
    created = models.DateTimeField(
        null=True,
        auto_now_add=True,
    )
    def __unicode__(self):
        return smart_unicode(self.name)
class Category(models.Model):
    name = models.CharField(
        max_length=255,
    )
    updated = models.DateTimeField(
        auto_now=True,
        null=True,
    )
    created = models.DateTimeField(
        null=True,
        auto_now_add=True,
    )
    def __unicode__(self):
        return self.name

class Collection(models.Model):
    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        to_field = 'name',
        null=True,
    )
    name = models.TextField(null=True)
    description = models.TextField()
    cover_art = models.CharField(
        max_length = 255,
        null=True,
    )
    category = models.ManyToManyField(Category,related_name="category")
    referenceWork = models.ManyToManyField(ReferenceWork,related_name="referenceWork")
    updated = models.DateTimeField(
        auto_now=True,
        null=True,
    )
    created = models.DateTimeField(
        null=True,
        auto_now_add=True,
    )
    def __unicode__(self):
        # return self.series_name + " by " + self.author_user.name
        return self.name

class Volume(models.Model):
    name = models.TextField(null=True,)
    number = models.IntegerField(null=True,)
    description = models.TextField(null=True,)
    cost = models.IntegerField(null=True,)
    samplePage = models.IntegerField(null=True,)
    cover_art = models.CharField(
        max_length = 255,
        null=True,
    )
    zip_file = models.CharField(
        max_length = 255,
        null=True,
    )
    collection = models.ForeignKey(Collection,on_delete=models.CASCADE)
    updated = models.DateTimeField(
        auto_now=True,
        null=True,
    )
    created = models.DateTimeField(
        null=True,
        auto_now_add=True,
    )
    def __unicode__(self):
        return self.name + " | " + self.collection.name
    def __unicode__(self):
        return self.name + " | " + self.collection.name

class Purchase(models.Model):
    purchased_volume = models.ForeignKey(Volume,models.DO_NOTHING)
    purchase_user = models.ForeignKey(User,models.DO_NOTHING)
    updated = models.DateTimeField(
        auto_now=True,
        null=True,
    )
    created = models.DateTimeField(
        null=True,
        auto_now_add=True,
    )
    def __unicode__(self):
        return self.purchased_volume.name + " purchased by " + self.purchase_user.name

class Favourite(models.Model):
    user = models.ForeignKey(User,models.CASCADE)
    series = models.ForeignKey(Collection,models.CASCADE)
    updated = models.DateTimeField(
        auto_now=True,
        null=True,
    )
    created = models.DateTimeField(
        null=True,
        auto_now_add=True,
    )
    def __unicode__(self):
        return self.series.name + " favourited by " + self.user.name

class Follow(models.Model):
    follower_user = models.ForeignKey(
        User,
        models.CASCADE,
        related_name="follower"
    )
    following_user = models.ForeignKey(
        User,
        models.CASCADE,
        related_name="following"
    )
    updated = models.DateTimeField(
        auto_now=True,
        null=True,
    )
    created = models.DateTimeField(
        null=True,
        auto_now_add=True,
    )
    def __unicode__(self):
        return self.follower_user.name + " is following " + self.following_user.name
