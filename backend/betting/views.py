from django.shortcuts import render

from rest_framework import viewsets
from .models import Bet, OrderedPot, UnorderedPot
from .serializers import BetSerializer, OrderedPotSerializer, UnorderedPotSerializer

class BetViewSet(viewsets.ModelViewSet):
    queryset = Bet.objects.all()
    serializer_class = BetSerializer

class OrderedPotViewSet(viewsets.ModelViewSet):
    queryset = OrderedPot.objects.all()
    serializer_class = OrderedPotSerializer

class UnorderedPotViewSet(viewsets.ModelViewSet):
    queryset = UnorderedPot.objects.all()
    serializer_class = UnorderedPotSerializer