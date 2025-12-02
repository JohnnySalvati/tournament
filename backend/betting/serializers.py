from rest_framework import serializers
from .models import Bet, OrderedPot, UnorderedPot

class BetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bet
        fields = '__all__'

class OrderedPotSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderedPot
        fields = '__all__'

class UnorderedPotSerializer(serializers.ModelSerializer):
    class Meta:
        model = UnorderedPot
        fields = '__all__'