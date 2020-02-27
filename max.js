let a = 55;
let b = 3;
let c = 7;

let temp = a > b ? a : b;

if (temp > c) {
    console.log(`${temp} is the largest number`);
} else {
    console.log(`${c} is the largest number`);
}

// Simply you can use Math.max() function to figure out the biggest number
