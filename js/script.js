"use strict"

const input = document.getElementById("userInput");

let expression = "";

let stringFlag = false;

let zeroFlag = false;


function equal() {
	if (stringFlag) {
		expression = expression.substring(0, expression.length - 1)
	}
	input.value = eval(expression);
	expression = "";
}

function press(num) {
	if (zeroFlag || input.value == "0") {
		expression = input.value.substring(0, input.value.length - 1);
		zeroFlag = false;
		console.log("if 1: " + expression);
	}

	if ((num == 0 && stringFlag)) {
		zeroFlag = true;
		stringFlag = true;

		console.log("if 2: " + expression);
	}

	if (typeof (num) == "string") {
		expression = input.value;
		console.log("if 3: " + expression);
		if (stringFlag) {
			expression = input.value.substring(0, input.value.length - 1);
			console.log("if 4: " + expression);
		}
		stringFlag = true;
	}
	else {
		stringFlag = false;
		console.log("if 5: " + expression);
	}
	expression += num;
	input.value = expression;
}

function erese() {
	input.value = "";
	expression = "";
}