# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-02-05 01:19
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dojindo_backend', '0016_auto_20160204_1853'),
    ]

    operations = [
        migrations.AddField(
            model_name='volume',
            name='zip_file',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
