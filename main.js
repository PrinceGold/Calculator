let number = []

let previousNumber = 0;

let operator = "";

var clear = document.getElementById("clear");
var space = document.getElementById("space");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var line = document.getElementById("line");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var x = document.getElementById("x");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var dash = document.getElementById("dash");
var zero = document.getElementById("zero");
var dot = document.getElementById("dot");
var equal = document.getElementById("equal");
var plus = document.getElementById("plus");

one.addEventListener("click",ourCallBack1);

function ourCallBack1() {
	number.push(1)
	if (operator) {
		space.innerHTML = "";
	}
	space.innerHTML += 1
}

two.addEventListener("click",ourCallBack2);

function ourCallBack2() {
	number.push(2)
	if (operator) {
		space.innerHTML = "";
	}
	space.innerHTML += 2
}

three.addEventListener("click",ourCallBack3);

function ourCallBack3() {
	number.push(3)
	if (operator) {
		space.innerHTML = "";
	}
	space.innerHTML += 3
}

four.addEventListener("click",ourCallBack4);

function ourCallBack4() {
	number.push(4)
	if (operator) {
		space.innerHTML = "";
	}
	space.innerHTML += 4
}

five.addEventListener("click",ourCallBack5);

function ourCallBack5() {
	number.push(5)
	if (operator) {
		space.innerHTML = "";
	}
	space.innerHTML += 5
}

six.addEventListener("click",ourCallBack6);

function ourCallBack6() {
	number.push(6)
	if (operator) {
		space.innerHTML = "";
	}
	space.innerHTML += 6
}

seven.addEventListener("click",ourCallBack7);

function ourCallBack7() {
	number.push(7)
	if (operator) {
		space.innerHTML = "";
	}
	space.innerHTML += 7
}

eight.addEventListener("click",ourCallBack8);

function ourCallBack8() {
	number.push(8)
	if (operator) {
		space.innerHTML = "";
	}
	space.innerHTML += 8
}

nine.addEventListener("click",ourCallBack9);

function ourCallBack9() {
	number.push(9)
	if (operator) {
		space.innerHTML = "";
	}
	space.innerHTML += 9
}

zero.addEventListener("click",ourCallBack0);

function ourCallBack0() {
	number.push(0)
	if (operator) {
		space.innerHTML = "";
	}
	space.innerHTML += 0
}

dot.addEventListener("click",ourCallBackDot);

function ourCallBackDot() {
	number.push('.')
	space.innerHTML += '.'
}



plus.addEventListener("click",ourCallBackPlus);

function ourCallBackPlus() {
	
	let numberString = number.join('')

	previousNumber = parseFloat(numberString)

	number = [];

	operator = "+"

}

dash.addEventListener("click",ourCallBackDash);

function ourCallBackDash() {

	let numberString = number.join('')

	previousNumber = parseFloat(numberString)

	number = [];

	operator = "-"

}

x.addEventListener("click",ourCallBackX);

function ourCallBackX() {

	let numberString = number.join('')

	previousNumber = parseFloat(numberString)

	number = [];

	operator = "x"

}

line.addEventListener("click",ourCallBackLine);

function ourCallBackLine() {

	let numberString = number.join('')

	previousNumber = parseFloat(numberString)

	number = [];

	operator = "/"

}

c.addEventListener("click",ourCallBackC);

function ourCallBackC() {

	previousNumber = 0

	number = [];

	operator = ""

	space.innerHTML = "";

}

equal.addEventListener("click",ourCallBackEquals);

function ourCallBackEquals() {
	if (operator === "+") {
		let numberString = number.join('')
		let newNumber = parseFloat(numberString)

		let total = previousNumber + newNumber;

		space.innerHTML = total;
		//do addition and show it to innerHTML of space
	}

	if (operator === "-") {
		let numberString = number.join('')
		let newNumber = parseFloat(numberString)

		let total = previousNumber - newNumber;

		space.innerHTML = total;
	}

	if (operator === "x") {
		let numberString = number.join('')
		let newNumber = parseFloat(numberString)

		let total = previousNumber * newNumber;

		space.innerHTML = total;
	}

	if (operator === "/") {
		let numberString = number.join('')
		let newNumber = parseFloat(numberString)

		let total = previousNumber / newNumber;

		space.innerHTML = total;
	}
}




