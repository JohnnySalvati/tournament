from bets import *

winner = OrderedPot("Ganador", 20)
fst_scnd = OrderedPot("1ero y 2do", 20)
final = UnorderedPot("Finalistas", 20)


carlitos = Player("Carlitos")
juan = Player("Juan")
maria = Player("Maria")
susana = Player("Susana")

one = Participant("Campeon 1")
two = Participant("Campeon 2")
three = Participant("Campeon 3")


fst_scnd.add_bet(carlitos, 1000, (one, two))
winner.add_bet(juan, 800, (two,))
winner.add_bet(carlitos, 5000, (three,))
winner.add_bet(maria, 700, (one,))
winner.add_bet(carlitos, 5000, (two,))
final.add_bet(juan, 2000, (three, one))
final.add_bet(carlitos, 7000, (one, three))
final.add_bet(maria, 2000, (one, two))

winner.show_payout()
fst_scnd.show_payout()

one.show_bets()
two.show_bets()
three.show_bets()

carlitos.show_bets()
juan.show_bets()
maria.show_bets()
susana.show_bets()

winner.show_win((one,))
fst_scnd.show_win((one, two))

final.show_payout()

final.show_win((one, three))