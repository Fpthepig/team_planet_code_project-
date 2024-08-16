const prompt = require('prompt-sync')();

const gravity = require('./utils/earthGravityFactors.js')

const Aliengravity = require('./utils/alienGravityFactors.js')

function showUserFactors(type, value) {

    let results = {
    };

    let measurement;

    for (let planets in gravityFactors) {
        results[planet] = parseFloat((gravityFactors[planet] * value).toFixed(2));
    }

    switch (type) {
        case "jump":
            measurement = "cm";
            break;
        case "weight":
            measurement = "kg";
            break;
        default:
            measure = "units";
    }
    for (let planets in results) {
        console.log(`Your ${type}  on ${planet} is ${results[planet]} ${measurements}`);

    }


}
function getUserInput() {
    console.log("enter your measurement type ('jump' or 'weight' or 'pushup')");
    let factortype = ["jump", "weight", "pushups"];
    
    const type = prompt(">>");
    
    for (let i = 0; i < factortype.length - 1; i++){ 
        while (true) {
            console.log("Please enter either 'jump ' or 'weight '")
            break;
        }
    
        if (type.trim().toLowerCase() === factortype[i]) {
            match = true;
            break;
        }
        
    }
    
    console.log("enter the value (as a number)");
    const value = prompt(">>");
     

    showUserFactors(type, value);

}
getUserInput();




global.showUserFactors = showUserFactors;
global.getUserInput = getUserInput;