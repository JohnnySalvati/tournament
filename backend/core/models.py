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
    total_amount = models.DecimalField(max_digits=10, decimal_places=2, default=Decimal("0.00"))

    class Meta:
        abstract = True

    def __str__(self):
        return f"{self.name} total (${self.total_amount}) house ({self.house}%)"
