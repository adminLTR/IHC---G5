# Generated by Django 5.1.2 on 2024-10-08 22:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_habitacion_casa'),
    ]

    operations = [
        migrations.AlterField(
            model_name='habitacion',
            name='casa',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.casa'),
        ),
    ]