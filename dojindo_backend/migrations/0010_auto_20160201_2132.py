# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-02-01 12:32
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dojindo_backend', '0009_auto_20160201_2121'),
    ]

    operations = [
        migrations.AlterField(
            model_name='collection',
            name='author_user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='author', to='dojindo_backend.User'),
        ),
    ]
