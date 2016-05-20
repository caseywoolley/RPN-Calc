var RPNCalc = function() {
	//initialize state and functions
	var stack = [];
	var result;
	
	var add = function(num) {
		return (result || 0) + num;
	};
	
	var subtract = function(num) {
		return (result || 0) - num;
	};
	
	var multiply = function(num) {
		return (result || 1) * num;
	};

	var divide = function(num) {
		return (result || 1) / num;
	};
	
	var operation = {
		'+': add,
		'-': subtract,
		'*': multiply,
		'/': divide
	};
	
	//input handler
	return function(input) {
		
		//do calculations
		if (operation[input] !== undefined) {
			for (var i = 0; i < stack.length; i++) {
				result = operation[input](stack[i]);
			}
			stack = [];
			return result;
		} else {

			//store numbers and handle exceptions
			if (input !== '' && !isNaN(input) && isFinite(input)) {
				stack.push(parseFloat(input));
				return input;
			} else if(input === 'q'){
				stack = [];
				result = undefined;
				return "Goodbye";
			} else {
				return "Invalid Input";
			}
		}
	};
};

