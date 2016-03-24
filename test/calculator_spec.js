/****Check if Browser or CLI****/
var window = window || undefined;

if (window) {
  GLOBAL = window;
} else {
  var fs = require('fs');
  var vm = require('vm');
  var chai = require('chai');
  var calculatorModule = require('../calculator');
}

/**
* Setup chai and write tests below
*/

var expect = chai.expect;
chai.should();

// Begin test for calculatorModule
describe('calculatorModule', function () {
  
  var calcModule = null;

  it('should be a function', function () {

    expect(calculatorModule).to.be.a('function');
  });

  it('should return an object literal when invoked', function () {

    expect(calculatorModule()).to.be.a('object');
  })

  // Begin tests for calculator Methods
  describe('Calculator Methods', function () {


    beforeEach(function () {

      calcModule = calculatorModule();
    });

    // Tests for load function
    describe('#load', function () {

      it('should be a function available on a new calculator object', function () {

        expect(calcModule.load).to.be.a('function');
      });

      it('should load a number into the calculator', function () {

        expect(calcModule.load(1)).to.be.a('number');
        expect(calcModule.load(2)).to.equal(2);
        expect(calcModule.load(25)).to.equal(25);
      });
    });

    // Tests for getTotal function
    describe('#getTotal', function () {

      it('should be a function available on a new calculator object', function () {

        expect(calcModule.getTotal).to.be.a('function');
      });

      it('should return the currrent total', function () {

        expect(calcModule.getTotal()).to.be.a('number');
        expect(calcModule.getTotal()).to.equal(0);
        calcModule.load(6);
        expect(calcModule.getTotal()).to.equal(6);
        calcModule.load(999);
        expect(calcModule.getTotal()).to.equal(999);
        calcModule.load(87);
        expect(calcModule.getTotal()).to.equal(87);
      });
    });

    // Tests for add function
    describe('#add', function () {

      it('should be a function available on a new calculator object', function () {

        expect(calcModule.add).to.be.a('function');
      });

      it('should take a number and add it\'s value to the total', function () {

        calcModule.load(0);
        calcModule.add(0);
        expect(calcModule.getTotal()).to.be.a('number');
        expect(calcModule.getTotal()).to.equal(0);
        calcModule.add(7);
        expect(calcModule.getTotal()).to.equal(7);
        calcModule.add(100);
        expect(calcModule.getTotal()).to.equal(107);
        calcModule.add(100000);
        expect(calcModule.getTotal()).to.equal(100107);
      });
    });

    // Test for subtract function
    describe('#subtract', function () {

      it('should be a function available on a new calculator object', function () {

        expect(calcModule.subtract).to.be.a('function');
      });

      it('should take a number and subtract it\'s value from the total', function () {

        calcModule.load(0);
        calcModule.subtract(0);
        expect(calcModule.getTotal()).to.be.a('number');
        expect(calcModule.getTotal()).to.equal(0);
        calcModule.add(50);
        calcModule.subtract(5);
        expect(calcModule.getTotal()).to.equal(45);
        calcModule.subtract(15);
        expect(calcModule.getTotal()).to.equal(30);
      });
    });

    // Test for mulitply function
    describe('#mulitply', function () {

      it('should be a function available on a new calculator object', function () {

        expect(calcModule.multiply).to.be.a('function');
      });

      it('should take a number and multiply the total by it\'s value', function () {

        calcModule.load(1);
        calcModule.multiply(1);
        expect(calcModule.getTotal()).to.be.a('number');
        expect(calcModule.getTotal()).to.equal(1);
        calcModule.multiply(50);
        expect(calcModule.getTotal()).to.equal(50);
        calcModule.multiply(2);
        expect(calcModule.getTotal()).to.equal(100);
      });
    });

    // Test for divide function
    describe('#divide', function () {

      it('should be a function available on a new calculator object', function () {

        expect(calcModule.divide).to.be.a('function');
      });

      it('should take a number and divide the total by it\'s value', function () {

        calcModule.load(100);
        calcModule.divide(1);
        expect(calcModule.getTotal()).to.be.a('number');
        expect(calcModule.getTotal()).to.equal(100);
        calcModule.divide(50);
        expect(calcModule.getTotal()).to.equal(2);
        calcModule.divide(2);
        expect(calcModule.getTotal()).to.equal(1);
      })
    });

    // Test for recallMemory function
    describe('#recallMemory', function () {

      it('should be a function available on a new calculator object', function () {

        expect(calcModule.recallMemory).to.be.a('function');
      });

      it('should return the value of the number stored in memory', function () {

        expect(calcModule.recallMemory()).to.be.a('number');
        expect(calcModule.recallMemory()).to.equal(0);
      });
    });

    // Test for saveMemory function
    describe('#saveMemory', function () {

      it('should be a function available on a new calculator object', function () {

        expect(calcModule.saveMemory).to.be.a('function');
      });

      it('should save the specified number to memory', function () {

        calcModule.load(3);
        calcModule.saveMemory();
        expect(calcModule.recallMemory()).to.be.a('number');  
        expect(calcModule.recallMemory()).to.equal(3);
        calcModule.add(54);
        calcModule.saveMemory();
        expect(calcModule.recallMemory()).to.equal(57);
      });
    });

    // Test for clearMemory function
    describe('#clearMemory', function () {

      it('should be a function available on a new calculator object', function () {

        expect(calcModule.clearMemory).to.be.a('function');
      });

      it('should clear the value stored in memory', function () {

        calcModule.load(5);
        calcModule.saveMemory();
        calcModule.clearMemory();
        expect(calcModule.recallMemory()).to.be.a('number');
        expect(calcModule.recallMemory()).to.equal(0);
        calcModule.load(98);
        calcModule.clearMemory();
        expect(calcModule.recallMemory()).to.equal(0);
      });
    });

    // Tests for validations
    describe('Validations', function () {

    });

  });
});
