const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

let card1;
let card2;
let card3;
let deck1;
let deck2;

beforeEach(function() {
  card1 = new Card(13, 'What is Steven\'s favorite snack?', ['flamin\' Hot Cheetos', 'Cheez-Its', 'Gummy Bears', 'Twinkies'], 'Twinkies');
  card2 = new Card(12, 'What is Nalle\'s middle name?', ['Red-man', 'Naji', 'Walker'], 'Red-man');
  card3 = new Card(1, 'What breed of dog is the best breed of dog?', ['cocker spaniel', 'vizsla', 'golden retriever'], 'golden retriever');
  deck1 = new Deck([card1, card2]);
  deck2 = new Deck([card1, card2, card3]);
});

  it('should be able to store cards', function() {
    expect(deck1.deck).to.deep.equal([card1, card2]);
    expect(deck2.deck).to.deep.equal([card1, card2, card3]);
  })

  it('know how many cards are in the Deck', function() {
    expect(deck1.countCards()).to.deep.equal(2);
    expect(deck2.countCards()).to.deep.equal(3);
  });
});
