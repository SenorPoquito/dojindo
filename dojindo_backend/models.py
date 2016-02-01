from __future__ import unicode_literals
from django.db import models
from django.utils import timezone
# Create your models here.

class User(models.Model):
    user_name = models.CharField(
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
    def __str__(self):
        return self.user_name

    def __unicode__(self):
        return self.user_name


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
    def __str__(self):
        return self.name

class Collection(models.Model):
    author_user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        to_field = 'user_name'
    )
    series_name = models.TextField()
    category = models.ManyToManyField(Category,related_name="category")
    updated = models.DateTimeField(
        auto_now=True,
        null=True,
    )
    created = models.DateTimeField(
        null=True,
        auto_now_add=True,
    )
    def __str__(self):
        # return self.series_name + " by " + self.author_user.user_name
        return self.series_name

class Volume(models.Model):
    volume_name = models.TextField()
    volume_number = models.IntegerField();
    collection = models.ForeignKey(Collection,on_delete=models.CASCADE)
    updated = models.DateTimeField(
        auto_now=True,
        null=True,
    )
    created = models.DateTimeField(
        null=True,
        auto_now_add=True,
    )
    def __str__(self):
        return self.volume_name + " | " + self.collection.series_name
    def __unicode__(self):
        return self.volume_name + " | " + self.collection.series_name

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
    def __str__(self):
        return self.purchased_volume.volume_name + " purchased by " + self.purchase_user.user_name

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
    def __str__(self):
        return self.series.series_name + " favourited by " + self.user.user_name

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
    def __str__(self):
        return self.follower_user.user_name + " is following " + self.following_user.user_name
