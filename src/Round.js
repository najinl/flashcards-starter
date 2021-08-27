const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck.deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.startTime = Date.now();
  }

  returnCurrentCard() {
    return this.deck[0];
  };

  takeTurn(guess) {
    let currentCard = this.returnCurrentCard();
    let turn = new Turn(guess, currentCard);

    this.deck.shift();
    this.turns ++;
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(currentCard.id);
      return turn.returnFeedback();
    } else if(turn.evaluateGuess() && this.deck.length >= 0) {
      return turn.returnFeedback();
    } else {
      this.endRound();
    }
  };

  calculatePercentCorrect() {
    return Math.round(((this.turns - this.incorrectGuesses.length) / this.turns) * 100);
  };

  endRound() {
    let finishMessage = (`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    console.log(`It took you ${this.calculateTime(Date.now() - this.startTime)} to finish the deck.`);
    console.log(finishMessage);
    return finishMessage;
  };

  calculateTime(milliseconds) {
    const totalSeconds = (milliseconds / 1000).toFixed(2);
    const minutes = Math.round(totalSeconds / 60);
    const seconds = Math.round((totalSeconds % 60));
    let displayedTime = '';

    displayedTime += `${minutes} minutes & ${seconds} seconds`;
    return displayedTime;
  }
}

module.exports = Round;
