# Generated by Django 5.1.2 on 2024-10-09 04:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_medidashabitacion_habitacion'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medidashabitacion',
            name='fecha_hora',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
