from django.db import models

class MensajeContacto(models.Model):
    nombre = models.CharField(max_length=100)
    correo = models.EmailField()
    mensaje = models.TextField()
    fecha_envio = models.DateTimeField(auto_now_add=True)
    respuesta = models.TextField(blank=True, null=True)  # Campo para la respuesta

    def __str__(self):
        return f"{self.nombre} - {self.correo}"
