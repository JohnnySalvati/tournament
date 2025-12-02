from django.db import models
from players.models import Player
from participants.models import Participant 
from core.models import Pot

class OrderedPot(Pot):
    pass

class UnorderedPot(Pot):
    pass

class Bet(models.Model):
    player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name="bets")
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    participant = models.ForeignKey(Participant, on_delete=models.CASCADE, related_name="bets") 
    pot = models.ForeignKey(OrderedPot, on_delete=models.CASCADE, related_name="bets")

    def __str__(self):
        return f"{self.player.name} - ${self.amount} a {self.participant.name} en {self.pot.name}"

