# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-02-01 08:00
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dojindo_backend', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Series',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('series_name', models.CharField(max_length=255)),
                ('author_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dojindo_backend.Users')),
            ],
        ),
    ]
