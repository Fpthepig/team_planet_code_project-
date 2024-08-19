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
    let factorType;
    let factorValue;
    let factorPlanets;
    let factorSystem;
    while (true) {
        let validWords = ["Jump", "Weight", "push ups"];
        console.log("What do you want for param1?(Chose one of this ('Jump', 'Weight', 'push ups'))");
        factorType = prompt(">>");
        let isMatch = false.trim.toLowerCase();
        for (let i = 0; i < validWords.length; i++) {
            if (factorType === validWords[i]) {
                isMatch = true;
                break;
            }
        }
        if (isMatch) {

            break;
        } else {
            console.error(`this ${factorType} is no good. please do it again `)
        }
    }
    while (true) {
        if (factorType !== "pushups") {
            console.log(" What measurement system do you want to use to complete your answer (enter 'm' for metric, )");
            param2 = prompt(">>");
        }
        if (!isNaN(FactorSystem) && 4 > factorSystem > 0) {
            switch (FactorSystem) {
                case "1":
                    factorSystem = "metric"
                    break;
                case "2":
                    factorSystem = "imperial"
                    // something
                    break;
                case "2":
                    // something
                    break;
                default:
                // something if number isn't accounted for
            }
        }
        break;
    } else {
        console.error("Please enter correctly according to prompt");

    }

    let factorUnit = "repetitions";
    if (factorSystem === "metric") {
        if (factorType === "weight") {
            factorUnit = "kg";
        } else if (factorType === "jump") {
            factorUnit = "cm";
        }
    } else if (factorSystem === "imperial") {
        if (factorType === "weight") {
            factorUnit = "lbs";
        } else if (factorType === "jump") {
            factorUnit = "in";
        }
    }

    while (true) {
        console.log(" What is the vlaue  ?");
        param3 = prompt(">>");
        break;
    }
    while (true) {
        console.log("What do you want for param4?");
        param4 = prompt(">>");
        break;
    }
    showUserFactors(factorType, factorUnit, factorValue, factorPlanets);
}

global.getUserInput = getUserInput;