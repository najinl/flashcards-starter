const data = require('./data');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound;
  }

  start() {
    const cards = [];
    const currDeck = new Deck(cards);
    prototypeQuestions.forEach(cardInfo => cards.push(new Card(cardInfo.id, cardInfo.question, cardInfo.answers, cardInfo.correctAnswer)));
    this.currentRound = new Round(currDeck);
    this.printMessage(currDeck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
