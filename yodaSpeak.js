// Question 6: Design a function that takes a sentence as input and returns a new sentence with the words reversed in the same order that Master Yoda would use.

function yodaSpeak(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

console.log(yodaSpeak("I am home")); // Output: "home am I"
console.log(yodaSpeak("Hello there")); // Output: "there Hello"
