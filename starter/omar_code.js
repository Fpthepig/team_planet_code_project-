// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();
// import earthGravity Factors
const earthGravityFactors = require('./utils/earthGravityFactors.js');
// import alienGravityFactors
const alienGravityFactors = require('./utils/alienGravityFactors.js');

// Your factorType is finalValue ___measurement__ on planet in the __earth solar system___
function showUserFactors(factorType, factorPlanets, factorUnit, factorValue) {
    // make object to hold final values

    // make calculation that will be passed to the final object as final values

    // do any other final variable manipulation
    // in some for loop
    console.log(`your ${factorType} is ${finalValue} ${factorUnit} on ${planet} in ${factorPlanets}`)
    getUserInput();
}

function getUserInput() {
    let param1;
    let param2;
    let param3;
    let param4;
    while (true) {
        let validWords = ["push ups", "weight", "jump"];
        console.log("What would you like to measure (push ups, weight, jump)");
        param1 = prompt(">>");
        let isMatch = false;
        for (let i = 0; i < validWords.length; i++) {
            if (param1 === validWords[i]) {
                
                isMatch = true;
                break;
            }
            else {
                console.log("WRONG!!! TRY AGAIN!!!");
                
                break;
            }
            


        }
        break;
    }
    while (true) {
        if (param2 !== "pushups") {
            console.log("what measurement system 1 or metrci 2 for imperial");
            param2 = prompt(">>");
        }
        if (!isNaN(param2) && 4 > factorySystem > 0) {
            switch (param2) {
                case "1":
                    param2 = "metric";
                    // something
                    break;
                case "2":
                    param2 = "imperial";
                    // something
                    break;
                default:
                    break;
                // something if number isn't accounted for
            }
            break;
        } else {
            console.error("please enter correctly");
        }
        
    };
    let factorUnit = "repetitions";
    if (factorSystem === "metric") {
        if (factorType === "weight") {

        }
        while (true) {
            console.log("What do you want for param3 ?");
            param3 = prompt(">>");
            break;
        }
        while (true) {
            console.log("What do you want for param4?");
            param4 = prompt(">>");
            break;
        }
        showUserFactors(param1, param2, param3, param4);
    }
};
global.getUserInput = getUserInput;

getUserInput();