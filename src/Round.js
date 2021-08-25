const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck.deck;
    this.turns = 0;
    // this.currentCard = this.deck[this.turns];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  };

  takeTurn(guess) {
    let currentCard = this.returnCurrentCard();
    let turn = new Turn(guess, currentCard);

    this.deck.shift();
    this.turns ++;
    if(!turn.evaluateGuess() && currentCard) {
      this.incorrectGuesses.push(currentCard.id);
      console.log(this.deck.length)
      return turn.returnFeedback();
    }else if(turn.evaluateGuess() && currentCard) {
      console.log(this.deck.length)
      return turn.returnFeedback();
    } else {
      console.log(this.deck.length)
      this.endRound();
    }
  };

  calculatePercentCorrect() {
    return Math.round(((this.turns - this.incorrectGuesses.length) / this.turns) * 100);
  };

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  };
}

module.exports = Round;
