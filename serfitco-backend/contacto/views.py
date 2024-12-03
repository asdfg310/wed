from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def enviar_mensaje(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        nombre = data.get('nombre', '')
        correo = data.get('correo', '')
        celular = data.get('celular', '')
        mensaje = data.get('mensaje', '')
        

        if not nombre or not correo or not mensaje:
            return JsonResponse({'error': 'Todos los campos son obligatorios.'}, status=400)

        try:
            # Enviar correo al administrador
            send_mail(
                subject=f'Nuevo mensaje de contacto: {nombre}',
                message=f'Has recibido un mensaje de contacto.\n\n'
                        f'Nombre: {nombre}\n'
                        f'Correo: {correo}\n'
                        f'Celular: {celular}\n'
                        f'Mensaje: {mensaje}',
                from_email='directorioclientes5@gmail.com',
                recipient_list=['directorioclientes5@gmail.com'],  # Cambia por el correo empresarial
                fail_silently=False,
            )
            return JsonResponse({'success': 'Mensaje enviado exitosamente.'})
        except Exception as e:
            return JsonResponse({'error': f'Error al enviar el correo: {str(e)}'}, status=500)

    return JsonResponse({'error': 'Método no permitido.'}, status=405)
