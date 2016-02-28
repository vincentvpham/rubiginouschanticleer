var assert = require('assert');

describe('String#split with assert', function(){
  it('should return an array', function(){
    assert(Array.isArray('a,b,c'.split(',')));
  });
});

var expect = require('expect.js');
var expected, current;

before(function(){
 expected = ['a', 'b', 'c'];
})
describe('String#split with expect', function(){
 beforeEach(function(){
   current = 'a,b,c'.split(',');
 })
 it('should return an array', function(){
   expect(Array.isArray(current)).to.be.true;
 });

 it('should return the same array', function(){
   expect(expected.length).to.equal(current.length);
   for (var i=0; i<expected.length; i++) {
     expect(expected[i]).equal(current[i]);
   }
 })
});
