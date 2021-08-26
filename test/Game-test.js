const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Game', function() {

  let game;

  beforeEach(function() {
    game = new Game();
    game.start();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should instantiate a new Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should instanciate a new Round', function() {
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  it('should create a deck on start', function() {
    expect(game.currentRound.deck.length).to.deep.equal(30);
  });
});
