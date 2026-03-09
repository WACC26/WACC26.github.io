let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function location Town hall() {
    clear();
    print("\nYou are in the Town hall!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\t Port restaurants \n\t Police station \n\t Kennedy Space Center \n\t Beach" );

    
    function processInput(input){
        if (input.toLowerCase() === " Port restaurants") {
            location Port restaurants();
        } else {
            stayHere();
            waitThenCall(location Town hall);
        }
    }
    waitForInput(processInput);
}

function location Port restaurants() {
    clear();
    print("\nYou are at the Port restaurants!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\t Town hall");
    
    function processInput(input){
        if (input.toLowerCase() === "Town hall") {
            locationA();
        } else {
            stayHere();
            waitThenCall(Port restaurants);
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
            locationA();
    }
    waitForInput(processInput);
}
