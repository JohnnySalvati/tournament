from django.shortcuts import render
from rest_framework.decorators import action 
from rest_framework.response import Response

from rest_framework import viewsets
from .models import Bet, OrderedPot, UnorderedPot
from .serializers import BetSerializer, OrderedPotSerializer, UnorderedPotSerializer

class BetViewSet(viewsets.ModelViewSet):
    queryset = Bet.objects.all()
    serializer_class = BetSerializer

class OrderedPotViewSet(viewsets.ModelViewSet):
    queryset = OrderedPot.objects.all()
    serializer_class = OrderedPotSerializer

    @action(detail=True, methods=["get"])
    def payout(self, request, pk=None):
        pot = self.get_object()
        result = pot.calculate_payout()
        return Response(result)


class UnorderedPotViewSet(viewsets.ModelViewSet):
    queryset = UnorderedPot.objects.all()
    serializer_class = UnorderedPotSerializer

    @action(detail=True, methods=["get"])
    def payout(self, request, pk=None):
        pot = self.get_object()
        result = pot.calculate_payout()
        return Response(result)
