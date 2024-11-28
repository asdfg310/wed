from rest_framework import serializers
from .models import ServicioContable, FuncionalidadExtra, Normativa

class ServicioContableSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicioContable
        fields = ['id', 'nombre', 'descripcion', 'precio', 'fecha_creacion']

class FuncionalidadExtraSerializer(serializers.ModelSerializer):
    class Meta:
        model = FuncionalidadExtra
        fields = '__all__'

class NormativaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Normativa
        fields = '__all__'
