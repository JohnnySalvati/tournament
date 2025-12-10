from django.db import models
from decimal import Decimal

class Person(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        abstract = True

    def __str__(self):
        return self.name

class Pot(models.Model):
    name = models.CharField(max_length=100)
    house = models.DecimalField(max_digits=5, decimal_places=2, default=Decimal("0.00"))
    class Meta:
        abstract = True

    def __str__(self):
        return f"{self.name} house: ({self.house}%)"
    
    def calculate_payout(self):
        total_amount = 0
        participants_total = {}
        for bet in self.bets.all(): # pylint: disable=no-member
            for participants in bet.participants.all():
                participants_total[participants] = (
                    participants_total.get(participants, Decimal("0.00")) + bet.amount
                )  
                total_amount += bet.amount               
        payout = {}
        share_pot = total_amount * (Decimal("1") - self.house / Decimal("100"))
        for participant, amount_total in participants_total.items():
            print(participant, amount_total)
            print(participant.name)
            payout[participant.name] = share_pot / amount_total

        return payout
    
