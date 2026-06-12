let array = [4,10,8,3,0,13,7,20];


function maximum(arr) {
    if (arr.length === 0) {
        console.log("Array is empty.");
        return null;
    }
    let max = arr[0];
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] > max) {
            max = arr[index];
        }
    }
    return max;
}

console.log("Maximum value is: " + maximum(array));

let summation = function(arr) {
    if (arr.length === 0) {
        console.log("Array is empty.");
        return null;
    }
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index]
        
    }
    return sum
}

console.log("Sum of all elements: "+ summation(array));

let NoOfOdd = (arr) => {
    if (arr.length === 0) {
        console.log("Array is empty.");
        return null;
    }
    let count =0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]%2 !== 0) {
            count ++;
        }
        
    }
    return count;
}

console.log("Count of odd Numbers : "+NoOfOdd(array));
