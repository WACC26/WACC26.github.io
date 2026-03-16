let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let  peacockTreat = false;

//If you need, add any "helper" functions here


//Make one function for each location
function townHall() {
    clear();
    print("\nYou are in the Town hall!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\t Port restaurants \n\t Police station \n\t Kennedy Space Center \n\t School" );

   
    function processInput(input){
        if (input.toLowerCase() === "port restaurants") {
            portRestaurants();
        } else if (input.toLowerCase() === "police station"){
	    policeStation();
	} else if (input.toLowerCase() === "kennedy space center") {
		ksc(); 
	} else if (input.toLowerCase() === "school") {
	   school();
	}else {
            stayHere();
            waitThenCall( townHall);
        }
    }
    waitForInput(processInput);
}

function  portRestaurants() {
    clear();
    print("\nYou are at the Port restaurants! You should grab a burger, or go buy some fish.");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\t Town hall");
    
    function processInput(input){
        if (input.toLowerCase() === "town hall") {
            townHall();
        } else {
            stayHere();
            waitThenCall(portRestaurants);
        }
    }
    waitForInput(processInput);
}
function  policeStation() {
    clear();
    print("\nYou are at the Police station!");
    print("\nA tired officer looks at you, and asks you to go check out the school to see if there is any peacocks running around. You quickly say yes, you have nothing to do right now.");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\t Town hall");
    
    function processInput(input){
        if (input.toLowerCase() === "town hall") {
            townHall();
        } else {
            stayHere();
            waitThenCall(policeStation);
        }
    }
    waitForInput(processInput);
}


function  ksc() {
    clear();
    print("\nWelcome to the Space Center! Tourists are all around, and you quickly see why. A bright flame roars into the sky, shaking the ground. A Falcon 9 rocket just launched! That was cool.");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\t Town hall");
    
    function processInput(input){
        if (input.toLowerCase() === "town hall") {
            townHall();
        } else {
            stayHere();
            waitThenCall(ksc);
        }
    }
    waitForInput(processInput);
}


function  school() {
    clear();
	if (peacockTreat) {
    print("\nYou walk up to the school to see choas. Bright peacocks are chasing kids into the school, and a teacher yells at you from the other side of the fence to go get some treats. When you ask where, she tells you the Cumberland farms. It's just down the road.");
	} else if (peacockTreat) {
	print("You walk up to the pretty birds, and start throwing out the seeds. They quickly follow, away from the school. You turn back to see everyone going home. Good job!")
	print("Congrats, you saved the day!")
	gameActive = false;
	}
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\t Town hall \n\t Cumberland Farms");
    
    function processInput(input){
        if (input.toLowerCase() === "town hall") {
            townHall();
        } else if (input.toLowerCase() === "cumberland farms") {
		cf();
	} else {
            stayHere();
            waitThenCall(school);
        }
    }
    waitForInput(processInput);
}

function  cf() {
    clear();
    print("\nYou walk in, and think about what to buy. A quick google search tells you to get seeds, something you quickly grab, as well as a muffin. It was a good muffin");
	peacockTreat = True;
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\t Town hall \n\t School");

    function processInput(input){
        if (input.toLowerCase() === "town hall") {
            townHall();
        } else if (input.toLowerCase() === "school") {
		school();
	} else {
            stayHere();
            waitThenCall(cf);
        }
    }
    waitForInput(processInput);
}




//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to Cape Canaveral, a small island town on Flordia's east coast! Press any key to start");

    function processInput(input){
            townHall();
    }
    waitForInput(processInput);
}
