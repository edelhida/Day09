// Only change code below this line 
function myDoWhile() {
    var myNumbers = ''; 
    var numbers = -1;
    do {
       numbers++;
       myNumbers = myNumbers + ',' + numbers.toString();
    } while (numbers < 9){

    }
return myNumbers.replace(',0', '0') + ';';
} 
console.log(myDoWhile());
// Only change code above this line 
module.exports = myDoWhile;