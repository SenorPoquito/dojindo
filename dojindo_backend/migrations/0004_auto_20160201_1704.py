# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-02-01 08:04
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dojindo_backend', '0003_auto_20160201_1702'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='DojindoUsers',
            new_name='Users',
        ),
    ]
