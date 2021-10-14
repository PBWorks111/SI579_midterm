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


thingInput.addEventListener('input', myFunction)

// Step 2- Write function
function myFunction (){
    function addS(num) {
        if(num === 1) {
            return '';
        } else {
            return 's';
        }
    }
    returnValue = "You added  " + parseInt(thingInput.value) + " thing" + addS(parseInt(thingInput.value));

    let writtenValue = thingCountOutput.textContent = returnValue

    return writtenValue

    
}
