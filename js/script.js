"use strict"

const input = document.getElementById("userInput");

let expression = "";

let stringFlag = false;

let zeroFlag = false;

let signFlag = false;


function equal() {
	if (stringFlag) {
		expression = expression.substring(0, expression.length - 1)
	}
	input.value = eval(expression);
	expression = "";
}

function press(num) {
	if (signFlag) {
		expression = input.value.substring(1, input.value.length);

		console.log(expression);
		signFlag = false;
	}

	if (input.value == 0 && typeof (num) == "string" && num != "+" && num != "-") {
		signFlag = true;
		console.log(signFlag);
	}


	if (zeroFlag || input.value == "0") {
		expression = input.value.substring(0, input.value.length - 1);
		zeroFlag = false;
	}

	if ((num == 0 && stringFlag)) {
		zeroFlag = true;
		stringFlag = true;

	}

	if (typeof (num) == "string") {
		expression = input.value;
		if (stringFlag) {
			expression = input.value.substring(0, input.value.length - 1);
		}
		stringFlag = true;
	}
	else {
		stringFlag = false;
	}
	expression += num;
	input.value = expression;
}

function erese() {
	input.value = "";
	expression = "";
}