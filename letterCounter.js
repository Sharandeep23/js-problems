let sentence = "I am a good person. I don't snore at night";
sentence = sentence.trim();
const countObj = {};

for (let i = 0; i < sentence.length; i++) {
  let letter = sentence[i];

  // spaces, dotes, quotes are ignored
  if (![" ", ".", "'", '"'].includes(letter)) {
    // If the letter is not found in the object
    // create and set its value 1
    // or increment by 1
    if (!Object.keys(countObj).includes(letter)) {
      countObj[letter] = 1;
    } else {
      countObj[letter]++;
    }
  }
}

console.log(countObj);
