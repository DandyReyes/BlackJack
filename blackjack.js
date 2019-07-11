// TODO: player doesn't need suit and weight. Make another Class
class CardHolder {
  constructor(name = '') {
    this.name = name;
    this.hand = ['', ''];
    this.suit = ['♠️', '♣️', '♥️', '♦️'];
    this.weight = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    this.result = [];
  }
  // Get random suit and weight
  randomizedCards() {
    const suitLength = this.suit.length;
    const randomSuit = Math.floor(Math.random() * suitLength);
    this.result.push(this.suit[randomSuit]);

    const weightLength = this.weight.length;
    const randomWeight = Math.floor(Math.random() * weightLength);
    this.result.push(this.weight[randomWeight]);
    return this.result;
  }

  // Generates the hand that player and dealer will have
  // TODO: Generates same hand for dealer and player
  generateHand() {
    const newhand = this.hand.map(randCard => {
      let hand = randCard;
      hand = this.randomizedCards();
      return hand;
    });
    return newhand;
  }
}

const player = new CardHolder();
// TODO: function to display player name
player.name = 'player\n';

const dealer = new CardHolder();
dealer.name = 'dealer\n';

const playerHand = player.generateHand();
const dealerHand = dealer.generateHand();

console.log(`${dealer.name + playerHand}\n`);
console.log(`${player.name + playerHand}`);
