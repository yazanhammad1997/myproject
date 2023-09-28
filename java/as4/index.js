var num1 = 31;
var num2 = 2;
var multiply = num1 * num2;
if (multiply === 62) {
    console.log("true");
} else {
    console.log("false");
}
var random = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;

console.log(random);

var num3 = 20;
var num4 = 8;
var mod = num3 % num4;
if (mod === 4) {
    console.log("The remainder is 4.");
} else {
    console.log("The remainder is not 4.");
}
var numbers = [16, 5, 20, 12, 8];
var max = Math.max(...numbers);

console.log(max);