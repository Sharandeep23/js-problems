const str = "Bangladesh";

// Method 1
// function reverseString(str) {
//     let reverse = "";
//     for (let i = 0; i < str.length; i++) {
//         reverse = str[i] + reverse;
//     }
//     return reverse;
// }

// Method 2
function reverseString2(str) {
    let reverse = "";
    for (i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

// Method 3
// Blazing Fast and Witty
let reverse = str
    .split("")
    .reverse()
    .join("");

console.log(reverse);

console.log(reverseString2(str));
