from django.contrib import admin
from django.core.mail import send_mail
from .models import MensajeContacto

class MensajeContactoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'correo', 'mensaje', 'respuesta', 'fecha_envio')
    fields = ('nombre', 'correo', 'mensaje', 'respuesta')  # Campos visibles en el admin

    # Sobrescribimos el método save_model
    def save_model(self, request, obj, form, change):
        if change and 'respuesta' in form.changed_data:  # Si se edita la respuesta
            try:
                send_mail(
                    subject='Respuesta a tu consulta en Serfitco',  # Asunto del correo
                    message=obj.respuesta,  # Contenido del correo
                    from_email='directorioclientes5@gmail.com',  # Correo remitente
                    recipient_list=[obj.correo],  # Correo del usuario
                    fail_silently=False,
                )
                self.message_user(request, 'Correo enviado con éxito al usuario.')
            except Exception as e:
                self.message_user(request, f'Error al enviar el correo: {e}', level='error')

        super().save_model(request, obj, form, change)

admin.site.register(MensajeContacto, MensajeContactoAdmin)



