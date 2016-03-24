/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = function(){
  var _memory = 0;
  var _total = 0;
  var error = new Error('Needs a number!');

  // Loads total's initial value to value that is passed in
  function setTotal(num){
    if(typeof(num)==='number'){
    _total = num;
    return _total;
    }
    else{
      throw error;
    }
  }

  // Returns the value stored in total
  function getTotal(){
    return _total;
  }

  // Adds the passed in number to the current total
  function add(num){
    if(typeof(num)==='number'){
    _total += num;
    return _total;
    }
    else{
      throw error;
    }
  }

  // Subtracts passed in number from total
  function subtract(num){
    if(typeof(num)==='number'){
    _total -= num;
    return _total;
    }
    else{
      throw error;
    }
  }

  // Multiplies passed in number by total
  function multiply(num){
    if(typeof(num)==='number'){
    _total *= num;
    return _total;
    }
    else{
      throw error;
    }
  }

  // Divides total by number passed in
  function divides(num){
    if(typeof(num)==='number'){
    _total /= num;
    return _total;
    }
    else{
      throw error;
    }
  }

  // Returns value currently stored in memory
  function recallMemory(){
    return _memory;
  }

  // Saves the value of total  into memory
  function saveMemory(){
    _memory = _total;
    return _memory;
  }

  // Clear memory
  function clearMemory(){
    _memory = 0;
    return _memory;
  }

  return {
    load : setTotal,
    getTotal: getTotal,
    add: add,
    subtract : subtract,
    multiply : multiply,
    divide : divides,
    recallMemory : recallMemory,
    saveMemory : saveMemory,
    clearMemory : clearMemory
  };


};

module.exports = calculatorModule;