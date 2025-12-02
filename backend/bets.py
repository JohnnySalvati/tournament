from tabulate import tabulate

class BetRecord():
    def __init__(self, bet: "Bet", pot: "Pot") -> None:
        self.bet = bet
        self.pot = pot

    def __eq__(self, other: object) -> bool:
        return (
            isinstance(other, BetRecord) and
            self.bet == other.bet and
            self.pot == other.pot
        )

class Person():
    def __init__(self, name) -> None:
        self.name = name
        self.bets: list[BetRecord] = []

    def _register_bet(self, bet: "Bet", pot: "Pot"):
        self.bets.append(BetRecord(bet, pot))

    def _unregister_bet(self, bet: "Bet", pot: "Pot"):
        self.bets.remove(BetRecord(bet, pot))

    def __str__(self) -> str:
        return self.name

class Player(Person):
    def show_bets(self):
        show = [(format_participants(bet_record.bet.participants), bet_record.bet.amount, bet_record.pot) for bet_record in self.bets]
        print(self)
        print(tabulate(show, headers=["Participant", "Amount", "Pot"]))
        print()
        
class Participant(Person):
    def show_bets(self):
        show = [(str(bet_record.bet.player), bet_record.bet.amount, bet_record.pot) for bet_record in self.bets]
        print(self)
        print(tabulate(show, headers=["Player", "Amount", "Pot"]))
        print()

class Bet:
    def __init__(self, player: Player, amount: int, participants: tuple[Participant, ...]) -> None:
        self.player = player
        self.amount = amount
        self.participants = participants

    def __eq__(self, other) -> bool:
        return (
                isinstance(other, Bet) and
                self.player == other.player and
                self.amount == other.amount and
                self.participants == other.participants
                )
    
    def __str__(self) -> str:
        return f"{self.player} {self.amount:6} {[p for p in self.participants]}"

class Pot:
    def __init__(self, name, house) -> None:
        self.total = 0
        self.name = name
        self.house = house
        self.bets: list[Bet] = []

    def add_bet(self, player: Player, amount: int, participants: tuple[Participant, ...]):
        bet = Bet(player, amount, participants)
        self.bets.append(bet)
        player._register_bet(bet, self)
        for participant in participants:
            participant._register_bet(bet, self)
        self.total += amount

    def delete_bet(self, player: Player, amount: int, participants: tuple[Participant, ...]):
        bet = Bet(player, amount, participants)
        self.bets.remove(bet)
        player._unregister_bet(bet, self)
        for participant in participants:
            participant._unregister_bet(bet, self)
        self.total -= amount

    def calculate_payout(self):
        participants = {}
        for bet in self.bets:
            participants[bet.participants] = participants.get(bet.participants, 0) + bet.amount
        payout = {}
        share_pot = self.total * (1 - self.house / 100)
        for participant in participants.keys():
            payout[participant] = share_pot / participants[participant] 
        return payout
    
    def show_payout(self):
        payout = self.calculate_payout()
        show =[[format_participants(participants), f"{pay:10.2f}"] for participants, pay in payout.items()]
        print(f"============ Payout Pot {self.name} =============")
        print(tabulate(show, headers=["Participants", "Payout"]))
        print()
        
    def show_win(self, participant: tuple[Participant, ...]):
        payout = self.calculate_payout()
        p = payout[participant]
        show = [(bet.player, bet.amount * p) for bet in self.bets if bet.participants == participant]
        print(f"=================== Pot {self.name} ---- {format_participants(participant).rstrip()} ==========================")
        print(tabulate(show, headers=["Player", "Paid"]))
        print()

    def __str__(self) -> str:
        return self.name

class OrderedPot(Pot):
    ...

class UnorderedPot(Pot):
    def add_bet(self, player: Player, amount: int, participants: tuple[Participant, ...]):
        super().add_bet(player, amount, order_participants(participants))

    def delete_bet(self, player: Player, amount: int, participants: tuple[Participant, ...]):
        super().delete_bet(player, amount, order_participants(participants))

    def show_win(self, participant: tuple[Participant, ...]):
        super().show_win(order_participants(participant))

def format_participants(participants):
        return (" / ".join([str(participant) for participant in participants])).ljust(50)

def order_participants(participants):
    return tuple(sorted(participants, key=lambda p: p.name))