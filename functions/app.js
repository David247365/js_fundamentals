// Functions - a procedure of code that will run when called

function addition (num1, num2) {
    return num1 + num2;
}

addition(10 + 16);

// Goodbye

function goodbye(name) {
    // your code here...
    return "Bye " + name + ".";
}

console.log(goodbye("Daniel"));

function subtract(num1, num2) {
    return num1 - num2;
}

function plusFive(num) {
    // your code here...
    return num + 5;
}

function averageOfTwo(num1, num2) {
    // your code here...
    return (num1 + num2) / 2;
}

function hello(str) {
    // your code here...
    let combinedString =  "Hello, " + str;
    console.log(combinedString);
}
  
hello("cat"); // prints "Hello, cat"
hello("Helen"); // prints "Hello, Helen"
hello("Sting"); // prints "Hello, Sting"

function divideByThree(num) {
    // your code here...
    return num / 3;
}

console.log(divideByThree(9)); // => 3.0
console.log(divideByThree(15)); // => 5.0
console.log(divideByThree(98)); // => 32.666666666666664

function whisper(str) {
    // your code here...
    return str.toLowerCase()
}
  
console.log(whisper("Hey Buddy")); // => "...hey buddy..."
console.log(whisper("YEA! that was fun")); // => "...yea! that was fun..."

function averageOfFour(num1, num2, num3, num4) {
    return (num1 + num2 + num3 + num4) / 4;
}

console.log(averageOfFour(10, 10, 15, 5)); // => 10
console.log(averageOfFour(3, 10, 11, 4)); // => 7
console.log(averageOfFour(1, 2, 3, 4)); // => 2.5

function yell(str) {
    // your code here...  
    return str.toUpperCase();
}
  
console.log(yell("I want to go to the store")); // => "I WANT TO GO TO THE STORE!!!"
console.log(yell("Time to program")); // => "TIME TO PROGRAM!!!"

function echo(string) {
    // your code here...
    let echoedString = string.toUpperCase() + "..." + string + "..." + string.toLowerCase();
    console.log(echoedString);
    return echoedString;
}
  
echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
echo("hey"); // => prints "HEY ... hey ... hey"
echo("JUMp"); // => prints "JUMP ... JUMp ... jump"