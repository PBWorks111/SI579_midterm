// Helps us pluralize word formatting by returning if we should
// add an 's' for a given quantity.
//
// For example, we should say '1 car' but '5 cars'
function addS(num) {
    if(num === 1) {
        return '';
    } else {
        return 's';
    }
}

const thingInput = document.querySelector('#problem-2 #thing-num-input');
const thingCountOutput = document.querySelector('#problem-2 #thing-count');

// Write your code here
thingCountOutput.textContent = "(TODO)";


// Step 1- Get thingInput to listen to event

thingInput.addEventListener("input", myFunction() )

function myFunction (){
    console.log(test.value)

    if (parseInt(thingInput.value) > 1) {
        
        thingCountOutput.textContent = "You added " + thingInput.value + " thing."
    }
    else if (parse(thingInput.value) > 3 ) {
        console.log ("Cheese")
    }
   
}

