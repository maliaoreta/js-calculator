module.exports = function subtract (calc, error) {
	
	return function (num) {
    if(typeof(num)==='number'){
	    calc.total -= num;
	    return calc.total;
    }
    else{
      throw error;
    }
  };
};