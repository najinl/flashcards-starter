const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', function() {

  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should have a deck that matches the instantiated deck\'s array of Cards', function() {
    expect(round.deck).to.deep.equal(deck.deck);
  });

  it('should return the current card being played', function() {
    expect(round.returnCurrentCard()).to.deep.equal(deck.deck[0]);
  });

  it('should start out with 0 turns having been taken', function() {
    expect(round.turns).to.deep.equal(0);
  });

  it('should start out with 0 incorrect guesses', function() {
    expect(round.incorrectGuesses.length).to.equal(0);
  });

  it('should return the string `incorrect!` if the guess is wrong', function() {
    expect(round.takeTurn('pug')).to.equal('incorrect!');
  });

  it('should return the string `correct!` if the guess is correct', function() {
    expect(round.takeTurn('sea otter')).to.equal('correct!');
  });

  it('should record a turn after each guess', function() {
    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');

    expect(round.turns).to.deep.equal(2);
  });

  it('should add the id of a Card into the incorrectGuesses array when an incorrect guess is made', function() {
    round.takeTurn('capybara');
    round.takeTurn('spleen');

    expect(round.incorrectGuesses).to.deep.equal([1, 14]);
  });

  it('should calculate the percentage of correct guesses', function() {
    round.takeTurn('sea otter');

    expect(round.calculatePercentCorrect()).to.deep.equal(100);
  });

  it('should print a message at the end of the round', function() {
    round.takeTurn('sea otter');
    round.takeTurn('appendix');

    expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly!');
  });
});
