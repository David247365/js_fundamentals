//  Control Flow - the order in which instructions are executed within a program

function isFive(num) {
    if (num === 5) {
        return true;
    } else {
        return false;
    }
}

console.log(isFive(5)); // => true
console.log(isFive(13)); // => false

function isOdd(num) {
    // your code here!
    if ((num % 2) === 0) {
        return false;
    } else {
        return true;
    }
}
  
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true

function isSubstring(searchString, subString) {
    // your code here...
    if (searchString.toLowerCase().indexOf(subString.toLowerCase()) >= 0) {
          return true;
    } else {
        return false;
    }
  }
  
  console.log(isSubstring("The cat went to the store", "he cat went")); // => true
  console.log(isSubstring("Time to program", "time")); // => true
  console.log(isSubstring("Jump for joy", "joys")); // => false

// Loops

let index = 0;

while (index < 10) {
    console.log("The number is " + index);
    index++;
}


