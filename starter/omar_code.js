// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();
// Import the gravityFactors module which contains factors for different planets
const gravityFactors = require('./utils/earthGravityFactors.js');
const alienGravityFactors = require('./utils/alienGravityFactors.js');
// Define a function to show user factors based on input type and value
function showUserFactors(type, value) {


    // Initialize an object to hold the results
    let results = {};

    // Declare a variable to hold the unit of measurement
    let measurement;

    // Iterate over each item in the gravityFactors object
    for (let planets in gravityFactors) {


        // Calculate the factor multiplied by the input value and round it to two decimals
        results[planets] = parseFloat((gravityFactors[planets] * value).toFixed(2));

        // Switch case to determine the measurement unit based on factor type

        switch (type) {
            case "jump":
                measurements = "cm";
                break;
            case 'weight':
                measurements = "kg";
                break;
            default:
                measurements = "units";
        }
    }
    // Iterate over the results and log each one
    for (let planet in results) {
        console.log(`your ${type} on ${planet} is ${results[planet]} ${measurements}`)

    }
}

// Define a function to get user inputs for factor type and value
function getUserInput() {
    // Prompt the user to enter the type of factor they want to calculate
    console.log("Jump or Weight?");
    let factorType = ["jump", "weight", "pushups"];
    // Prompt the user to enter the numerical value of the factor
    const type = prompt(">> ");
    let match = false;
    for (let i = 0; i < factorType.length - 1; i++) {
        if (type.trim().toLowerCase() === factorType[i]) {
            match = true;
            break;
        }
        while (true) {
            console.log("Please enter either 'jump' or 'Weight'");
          
            break;
        }

    }

    console.log("enter the value");
    const value = prompt(">> ");
    // Call the showUserFactors function with the user inputs and the gravity factors
    showUserFactors(type, value);
    // Expose getUserFactors globally
}
getUserInput();
global.getUserInput = getUserInput;
global.showUserFactor = showUserFactors;