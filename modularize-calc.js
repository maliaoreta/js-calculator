
  var addFunc = require("./calc-modules/add.js");
  var subFunc = require("./calc-modules/subtract.js");
  var multFunc = require("./calc-modules/multiply.js");
  var divFunc = require("./calc-modules/divide.js");

/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = function(){
  var _calc = {
    memory : 0,
    total : 0
  };
var err = new Error('Needs a number!');


  // var _memory = 0;
  // var _total = 0;
  

  // Loads total's initial value to value that is passed in
  function load(num){
    if(typeof(num)==='number'){
    _calc.total = num;
    return _calc.total;
    }
    else{
      throw err;
    }
  }

  // Returns the value stored in total
  function getTotal(){
    return _calc.total;
  }


  // Adds the passed in number to the current total
  // function add(num){
  //   if(typeof(num)==='number'){
  //   _total += num;
  //   return _total;
  //   }
  //   else{
  //     throw error;
  //   }
  // }

  // Subtracts passed in number from total
  // function subtract(num){
  //   if(typeof(num)==='number'){
  //   _total -= num;
  //   return _total;
  //   }
  //   else{
  //     throw error;
  //   }
  // }

  // Multiplies passed in number by total
  // function multiply(num){
  //   if(typeof(num)==='number'){
  //   _total *= num;
  //   return _total;
  //   }
  //   else{
  //     throw err;
  //   }
  // }

  // Divides total by number passed in
  // function divides(num){
  //   if(typeof(num)==='number'){
  //   _total /= num;
  //   return _total;
  //   }
  //   else{
  //     throw err;
  //   }
  // }

  // Returns value currently stored in memory
  function recallMemory(){
    return _calc.memory;
  }

  // Saves the value of total  into memory
  function saveMemory(){
    _calc.memory = _calc.total;
    return _calc.memory;
  }

  // Clear memory
  function clearMemory(){
    _calc.memory = 0;
    return _calc.memory;
  }

  return {
    load : load,
    getTotal: getTotal,
    add: addFunc(_calc, err),
    subtract : subFunc(_calc, err),
    multiply : multFunc(_calc, err),
    divide : divFunc(_calc, err),
    recallMemory : recallMemory,
    saveMemory : saveMemory,
    clearMemory : clearMemory
  };


};


module.exports = calculatorModule;

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */


  /**
   * Return the value of `total`
   * @return { Number }
   */


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

