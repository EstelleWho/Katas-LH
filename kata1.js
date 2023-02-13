const sumLargestNumbers = function (data) {
    let num;
    let num2;

    num = Math.max(...data);
    console.log("num: " + num);

    num2 = Math.max(...data);
    console.log("num2: " + num2);

    return num + num2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));