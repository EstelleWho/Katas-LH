const sumLargestNumbers = function (data) {


    for (let i = 0; i < data.length; i++)
        for (let j = 0; j < i; j++)
            if (data[i] < data[j]) {
                let x = data[i];
                data[i] = data[j];
                data[j] = x;
            }

    let reverseData = data.reverse();
    // console.log(reverseData);

    let numOne = reverseData[0];
    let numTwo = reverseData[1];
    let largestNumSum = numOne + numTwo;
    return largestNumSum;

};


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));