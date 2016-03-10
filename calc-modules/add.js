module.exports = function add(calc, error){

	return function (num) {
		console.log(num);
    if(typeof(num)==='number'){
    	calc.total += num;
    	return calc.total;
   	 }
	 else{
	   throw error;
	 }
  };
};