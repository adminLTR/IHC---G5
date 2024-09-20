from django.db import models

# Create your models here.
class Habitacion(models.Model):
    nombre = models.CharField(max_length=100, null=False, blank=False)
    piso = models.IntegerField()
    descripcion = models.TextField()
    # usuario = models.ForeignKey(User)

class TipoDispositivo(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    image = models.ImageField(upload_to="assets/tipo_dispositivos")

class Dispositivo(models.Model):
    habitacion = models.ForeignKey(Habitacion, on_delete=models.CASCADE)
    tipo = models.ForeignKey(TipoDispositivo, on_delete=models.PROTECT)
    nombre = models.CharField(max_length=100)
    intensidad = models.IntegerField()
    estado = models.BooleanField(default=False)
    descripcion = models.TextField()

class Metricas(models.Model):
    # usuario = models.ForeignKey(User)
    fecha_hora = models.DateTimeField()
    temperatura = models.DecimalField(max_digits=5, decimal_places=2)
