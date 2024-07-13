// Question 1: Design a function that reverses the digits of an integer.
// For example, 50 should become 5 and -12 should become -21.

function reverseInteger(n) {
    const isNegative = n < 0;
    const reversedNumber = Math.abs(n).toString().split('').reverse().join('');
    return isNegative ? -parseInt(reversedNumber) : parseInt(reversedNumber);
}

console.log(reverseInteger(50));  // Output: 5
console.log(reverseInteger(-12)); // Output: -21
