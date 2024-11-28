from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from .models import ServicioContable, FuncionalidadExtra, Normativa
from .serializers import (
    ServicioContableSerializer,
    FuncionalidadExtraSerializer,
    NormativaSerializer,
)

class ServicioContableList(generics.ListCreateAPIView):
    queryset = ServicioContable.objects.all().order_by('-fecha_creacion')
    serializer_class = ServicioContableSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['nombre']

class ServicioContableDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ServicioContable.objects.all()
    serializer_class = ServicioContableSerializer

class NormativaList(generics.ListAPIView):
    queryset = Normativa.objects.all().order_by('-fecha_publicacion')
    serializer_class = NormativaSerializer

class FuncionalidadExtraList(generics.ListCreateAPIView):
    queryset = FuncionalidadExtra.objects.all().order_by('-fecha_creacion')
    serializer_class = FuncionalidadExtraSerializer
