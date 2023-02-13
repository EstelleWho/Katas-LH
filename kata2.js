// zhe instructions
// const conditionalSum = function(values, condition) {
  // Your code here
// };

// console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
// console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
// console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
// console.log(conditionalSum([], "odd"));

// oy! oy! Use some sort of looping. Do Not use Array.prototype.filter()

// zhe outputs
// 6
// 9
// 144
// 0


const conditionalSum = function (values, condition) {
    //declare new ARRAY list
    let conditionalArr = []

    //use if...else if?
    if (condition === 'even') {
        for (let value of values) {
            if (value % 2 === 0) {
                conditionalArr.push(value);
            }
        }
    } else if (condition === 'odd') {
        for (let value of values) {
            if (value % 2 !== 0) {
                conditionalArr.push(value);
            }
        }
    }

    //add nbs invalid
    let sum = conditionalArr.reduce(function (a, b) {
        return a + b;
    }, 0);
    //return sum?
    return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));