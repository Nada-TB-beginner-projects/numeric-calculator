'use strict;'

/****************************variables****************************/

var outPut=document.getElementById('outPut');
const clearbtn= document.getElementById("clear");
const resultbtn=document.getElementById("result");
var number=document.getElementsByClassName("target");

/**************************functions******************************/

function clear(){
	outPut.value= "";			
}

function btnClick(){
	outPut.value+= this.value;	
}

function result(){
	var result;
	result=eval(outPut.value);
	result=result.toFixed();
	outPut.value=result;	
}


/**************************Events**********************************/
clearbtn.addEventListener('click', clear);
for (var i = 0; i < number.length; i++) {
	number[i].addEventListener('click', btnClick);
}

resultbtn.addEventListener('click', result);



