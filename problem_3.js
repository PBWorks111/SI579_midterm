const clickCountButton = document.querySelector('#problem-3 #click-count');

// write your code here
count = 0;


clickCountButton.onclick = function myFunction (){
    count += 1;
    function addS(num) {
        if(num === 1) {
            return '';
        } else {
            return 's';
        }
    }
    let x = addS(count)
    
    clickCountButton.textContent = "You clicked the button " + count + " time" + x

}
