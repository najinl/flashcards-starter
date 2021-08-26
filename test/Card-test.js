const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function() {

  let card1;
  let card2;

  beforeEach(function() {
    card1 = new Card();
    card2 = new Card(1, 'Who is the best dog you know?',['Nalle', 'Taro', 'Panda'], 'Nalle');
  });

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    expect(card1).to.be.an.instanceof(Card);
  });

  it('shoiuld store an id', function() {
    expect(card2.id).to.deep.equal(1);
  });

  it('should store a question', function() {
    expect(card2.question).to.equal('Who is the best dog you know?');
  });

  it('should store a list of possible answers', function() {
    expect(card2.answers).to.deep.equal(['Nalle', 'Taro', 'Panda']);
  });

  it('should store the correct answer', function() {
    expect(card2.correctAnswer).to.equal('Nalle');
  });
});
