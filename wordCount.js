let sentence = "I am a good person. I don't snore at night";
sentence = sentence.trim();
let wordCount = 0;

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " " && sentence[i - 1] !== " ") {
        wordCount++;
    }
}

// Because the last word was not counted
wordCount++;

console.log(`Total Words are ${wordCount}`);
