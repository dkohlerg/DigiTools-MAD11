var miau = 0;
var guau = 0;
var oink = 0;
var cuak = 0;

function simular() {

	var GateAvalue = document.getElementById("GateMenuA");
	var GateBvalue = document.getElementById("GateMenuB");

	
	if ((GateAvalue.value == 2) && (GateBvalue.value ==1)) {
		document.getElementById("res").value = 1;
	}
	else { document.getElementById("res").value = 0;}
}

function desplegable() {
	e = document.getElementById("GateSelector");
	guau = e.options[e.selectedIndex].value;
}

function cambioOR() {
	miau = 1;
	
	if (guau == 1) {
	document.getElementById('GateA').src='images/or.png'
	oink = 1;
	}
	else if (guau == 2) {
	document.getElementById('GateB').src='images/or.png'
	}
	else {}
	
	final();
}

function cambioAND() {
	miau = 2;
	
	if (guau == 1) {
	document.getElementById('GateA').src='images/and.png'
	}
	else if (guau == 2) {
	document.getElementById('GateB').src='images/and.png'
	cuak = 1;
	}
	else {}
	
	final();
}

function cambioNOT() {
	
	if (guau == 1) {
		if (miau==1){
			document.getElementById('GateA').src='images/nor.png'
		}
		else if (miau==2){
			document.getElementById('GateA').src='images/nand.png'
		}
		else {}
	}
	else if (guau == 2) {
		if (miau==1){
			document.getElementById('GateB').src='images/nor.png'
		}
		else if (miau==2){
			document.getElementById('GateB').src='images/nand.png'
		}
		else {}
	}
	else {}	
}

function final() {
	
	if ((oink == 1) && (cuak == 1)) {
		document.getElementById('fin').src='images/verde.png';
		oink = 0;
		cuak = 0;
	}
	
	else { document.getElementById('fin').src='images/rojo.png'; }
}
	