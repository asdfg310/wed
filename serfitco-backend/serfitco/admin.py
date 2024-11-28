from django.contrib import admin
from .models import ServicioContable
from .models import FuncionalidadExtra

@admin.register(ServicioContable)
class ServicioContableAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'precio', 'fecha_creacion')
    search_fields = ('nombre', 'descripcion')


admin.site.register(FuncionalidadExtra)    
