"use strict";

function addToBody(text){                                                  
    document.body.innerHTML += "<p>" + text + "</p>";
}

/*

console.log("it works!");
let yourName = prompt("What's your name?");
addToBody("hi " + yourName);

*/

let temp = prompt("What temperature is it outside?");
temp = Number(temp);


if(temp < 32){ 
	addToBody("It's Freezing! Watch out for ice!");
	
}else if(temp < 80){
	addToBody("not freezing");

}else{
	addToBody("Go to the beach");

}
