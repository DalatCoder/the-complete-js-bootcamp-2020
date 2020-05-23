// function makeDeck() {
//   const deck = [];
//   const suits = ["hearts", "diamonds", "spades", "clubs"];
//   const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";

//   for (let value of values.split(",")) {
//     for (let suit of suits) {
//       deck.push({ value, suit });
//     }
//   }

//   return deck;
// }

// const deck = makeDeck();
// console.log(deck);

const myDeck = {
  deck: [],
  suits: ["hearts", "diamonds", "spades", "clubs"],
  values: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  drawnCards: [],
  initializeDeck() {
    const { deck, suits, values } = this;
    for (let value of values) {
      for (let suit of suits) {
        deck.push({ value, suit });
      }
    }
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
  drawMultiple(num) {
    const cards = [];
    for (let i = 0; i < num; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  },
  suffle() {
    const { deck } = this;
    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[j], deck[i]] = [deck[i], deck[j]];
    }
  },
};

myDeck.initializeDeck();
console.log(myDeck.deck);

myDeck.suffle();
console.log(myDeck.deck);
