// Question 5: Design a function that takes a list of integers as input and returns True if the list contains two consecutive threes.

function hasConsecutiveThrees(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === 3 && nums[i + 1] === 3) {
            return true;
        }
    }
    return false;
}

console.log(hasConsecutiveThrees([1, 3, 3])); // Output: true
console.log(hasConsecutiveThrees([1, 3, 1, 3])); // Output: false
