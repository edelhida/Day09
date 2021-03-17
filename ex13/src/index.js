
    // Only change code below this line 
function inverseWhile() {
    var fiveNumbers = 5;
    var string = ''
    while (fiveNumbers >= 0) {
        string = string + ',' + fiveNumbers.toString();
        fiveNumbers--;
    } 
    return string.replace(',5', '5') + ';';

}

    // Only change code above this line 
 

console.log(inverseWhile());

module.exports = inverseWhile;