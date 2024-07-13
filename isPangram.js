// Question 4: Design a function that determines whether a given string is a pangram.

function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerCased = sentence.toLowerCase();

    for (let char of alphabet) {
        if (!lowerCased.includes(char)) {
            return false;
        }
    }

    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog")); // Output: true
console.log(isPangram("Hello, world!")); // Output: false
