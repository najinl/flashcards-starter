const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  let card;
  let turn1;
  let turn2;

  beforeEach(function() {
    card = new Card(1, 'What breed of dog is the best breed of dog?', ['cocker spaniel', 'vizsla', 'golden retriever'], 'golden retriever');
    turn1 = new Turn('cocker spaniel', card);
    turn2 = new Turn('golden retriever', card);
  });

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it('should have a guess', function() {
    expect(turn1.returnGuess()).to.deep.equal('cocker spaniel');
  });

  it('should store an instance of Card', function() {
    expect(turn1.returnCard()).to.deep.equal(card);
  });

  it('should return false if the guess is not the correct answer', function() {
    expect(turn1.evaluateGuess()).to.equal(false)
  });

  it('should return true if the guess is the correct answer', function() {
    expect(turn2.evaluateGuess()).to.equal(true)
  });

  it('should return the string `correct!` if the guess is right', function() {
    expect(turn2.returnFeedback()).to.equal('correct!');
  });

  it('should return the string `incorrect!` if the guess is wrong', function() {
    expect(turn1.returnFeedback()).to.equal('incorrect!');
  });
});
