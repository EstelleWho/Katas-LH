// les instructions: vowels a, e, i, o, u
// const numberOfVowels = function(data) {
  // Put your solution here
//};

// console.log(numberOfVowels("orange"));
// console.log(numberOfVowels("lighthouse labs"));
// console.log(numberOfVowels("aeiou"));

// expected outputs
// 3
// 5
// 5


const numberOfVowels = data => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;
    //loop nested?;
    for (let character of data) {
        for (let vowel of vowels) {
            if (character === vowel) {
                counter++
            };
        };
    };
    return counter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

