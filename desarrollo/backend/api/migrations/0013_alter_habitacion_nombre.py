# Generated by Django 5.1.2 on 2024-11-13 20:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_alter_medidashabitacion_fecha_hora'),
    ]

    operations = [
        migrations.AlterField(
            model_name='habitacion',
            name='nombre',
            field=models.CharField(max_length=100),
        ),
    ]
