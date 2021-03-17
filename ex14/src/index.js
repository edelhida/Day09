// Only change code below this line 
function myForLoop1() {
    var evenNumbers = 0;
    var string = '';
    for (evenNumbers = 0; evenNumbers <= 8; evenNumbers += 2) {
        string = string + ',' + evenNumbers.toString();
    }
    return string.replace(',0', '0') + ';';
}

function myForLoop2() {
    
    var evenInverseNumbers = 8;
    var string = '';
    
    for (evenInverseNumbers = 8; evenInverseNumbers >= 0; evenInverseNumbers -= 2) {
        string = string + ',' + evenInverseNumbers.toString();
    } 
    return string.replace(',8', '8') + ';';   
}
console.log(myForLoop1());
console.log(myForLoop2());
// Only change code above this line
module.exports = {
    myForLoop1,
    myForLoop2
};