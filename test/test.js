var helpers = require('C:/Users/KASWARA/Desktop/JustOn_BewerbungsAufgabe/New_Project/routes/helpers');
var assert = require('assert');
var expect = require('chai').expect;

/*Assert Style*/
//
describe('sumAllOfArray: Normal Case', function() {
describe('#sumAllOfArray', function(){
	it('should return 6 of the value not present',
	function() {
      assert.equal(helpers.sumAllOfArray([1,2,3]), 6);
	
  });
});
});

//
describe('sumAllOfArray: EmptyArray', function() {
describe('#sumAllOfArray', function(){
	it('should return 0 if the value not present',
	function() {
      assert.equal(helpers.sumAllOfArray([]), 0);
  });
});
});

//
describe('computeDigitSum: Normal Case', function() {
describe('#computeDigitSum', function(){
	it('should return 6 if the input 123',
	function() {
      assert.equal(helpers.computeDigitSum(123), 6);
  });
});
});

//
describe('computeDigitSum: Special case', function() {
describe('#computeDigitSum', function(){
	it('should return 0 of the value not present',
	function() {
      assert.equal(helpers.computeDigitSum(), 0);
  });
});
});

//
describe('readJsonFileToObject: Empty file', function() {
describe('#readJsonFileToObject', function(){
	it('should return empty object if no file passed',
	function() {
      assert.equal(helpers.readJsonFileToObject('./data/test.json'), null);
  });
});
});

/*Expect Style*/
describe('computeDigitSum: Null input', function() {
  //
  context('without arguments', function() {
    it('should return 0', function() {
      expect(helpers.computeDigitSum()).to.equal(0)
    })
  })
  //
  context('computeDigitSum: Input type error', function() {
    it('should throw error', function() {
      expect(function() {
        helpers.computeDigitSum('123')
      }).to.throw(TypeError, 'Invalid Argument Type')
    })
  })
  context('readJsonFileToObject: Input type error', function() {
		it('should throw error', function() {
		  expect(function() {
			helpers.readJsonFileToObject('')
		  }).to.throw(Error, 'No file')
		})
	  }) 
})
