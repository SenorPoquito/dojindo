# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-02-01 12:16
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dojindo_backend', '0007_auto_20160201_2108'),
    ]

    operations = [
        migrations.AlterField(
            model_name='collection',
            name='author_user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='author', to='dojindo_backend.User'),
        ),
        migrations.AlterField(
            model_name='volume',
            name='parent_series',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='series', to='dojindo_backend.Collection'),
        ),
    ]