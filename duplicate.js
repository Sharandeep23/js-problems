const nums = [3, 7, 11, 8, 3, 2, 11, 7, 8, 3, 6, 5];
const uniqueNums = [];

nums.forEach(num => {
    !uniqueNums.includes(num) ? uniqueNums.push(num) : null;
});

console.log(nums);
console.log(uniqueNums);
