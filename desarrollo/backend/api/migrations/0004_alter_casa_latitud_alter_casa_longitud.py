# Generated by Django 5.1.1 on 2024-09-27 20:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_casa_latitud_alter_casa_longitud'),
    ]

    operations = [
        migrations.AlterField(
            model_name='casa',
            name='latitud',
            field=models.DecimalField(decimal_places=5, max_digits=8, null=True),
        ),
        migrations.AlterField(
            model_name='casa',
            name='longitud',
            field=models.DecimalField(decimal_places=5, max_digits=8, null=True),
        ),
    ]