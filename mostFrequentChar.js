// Question 3: Design a function that takes a string or sequence of characters as input and returns the character that appears most frequently.

function mostFrequentChar(str) {
    const charCount = {};
    let maxChar = '';
    let maxCount = 0;

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
        if (charCount[char] > maxCount) {
            maxChar = char;
            maxCount = charCount[char];
        }
    }

    return maxChar;
}

console.log(mostFrequentChar('11189')); // Output: '1'
console.log(mostFrequentChar('hello')); // Output: 'l'
