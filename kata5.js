// les instructions *** omg what is this???

// const urlEncode = function(text) {
  // Put your solution here
// };

// console.log(urlEncode("Lighthouse Labs"));
// console.log(urlEncode(" Lighthouse Labs "));
// console.log(urlEncode("blue is greener than purple for sure"));

// expected outputs
// Lighthouse%20Labs
// Lighthouse%20Labs
// blue%20is%20greener%20than%20purple%20for%20sure

// ATTENTION Use some sort of looping. Do Not use String.prototype.replace ***


const urlEncode = text => {
    
    let encodedString = '';
    let string = text.trim();
    // is this where you use string prototype? you need to leave a space btw the apostrophes...
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            encodedString += '%20';
        } else {
            encodedString += string[i];
        }
    } return encodedString;
}
//REDO REDO REDO!!

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
