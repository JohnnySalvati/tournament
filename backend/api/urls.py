from django.urls import path, include
from rest_framework import routers
from betting.views import BetViewSet, OrderedPotViewSet, UnorderedPotViewSet
from players.views import PlayerViewSet
from participants.views import ParticipantViewSet

router = routers.DefaultRouter()
router.register(r"bets", BetViewSet)
router.register(r"orderedpots", OrderedPotViewSet)
router.register(r"unorderedpots", UnorderedPotViewSet)
router.register(r"players", PlayerViewSet)
router.register(r"participants", ParticipantViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
