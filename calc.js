function myclick(a) {
	myform.display.value+=a;
} 
function equalto() {
	myform.display.value=eval(myform.display.value);
}
function ac() {
	myform.display.value="";
}
function backspace() {
	var prevalue=myform.display.value;
	myform.display.value=prevalue.substr(0,prevalue.length-1);
}
function sin() {
	myform.display.value=Math.sin(myform.display.value);
}
function cos() {
	myform.display.value=Math.cos(myform.display.value);
}
function tan() {
	myform.display.value=Math.tan(myform.display.value);
}
function square() {
	myform.display.value=Math.pow(myform.display.value,2);
}
function squarert() {
	myform.display.value=Math.pow(myform.display.value,1/2);
}
