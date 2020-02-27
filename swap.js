let a = 5;
let b = 7;

console.log(`Before Swap: a = ${a}, b = ${b}`);

// Basic Rule of Swaping
// let temp = a;
// a = b;
// b = temp;

// // Second way of swaping
// a = a + b;      // total
// b = a - b;      // total - b
// a = a - b;      // total - b(which is a)

// Third way of swaping
[a, b] = [b, a];

console.log(`After Swap: a = ${a}, b = ${b}`);
