let nums = [34, 23, 232, 24, 64, 223, 212, 123];

// Fastest Approach
// let maxNum = Math.max(...nums);
// console.log(maxNum);

// Legacy Approach

let maxNum = nums[0];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxNum) {
        maxNum = nums[i];
    }
}

console.log(maxNum);
