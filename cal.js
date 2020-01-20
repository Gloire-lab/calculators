function calc() {
	



var x = parseInt(document.querySelector(".Num1").value);
var y = parseInt(document.querySelector(".Num2").value);
var operator = document.querySelector(".operator").value;

var calculate;


if (operator == "add") {

	calculate = x + y; 
}
else if (operator == "sub") {
	calculate = x - y;
}
else if (operator == "div") {
	calculate = x / y;
}
else if (operator == "mult") {
	calculate = x * y;
}
document.querySelector("#result").innerHTML =calculate;

}