let nums = [34, 23, 24, 64, 232, 223, 212, 123];

// Modern Approach

// let sum = nums.reduce((total, num) => total + num);

// Legacy Approach

// let sum = 0;

// for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
// }

// console.log(sum);

// Doing something different

const arraySum = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

console.log(arraySum(nums));
