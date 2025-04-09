// Given an array of numbers, return an array, with each member of input array rounded to a nearest number, divisible by 5.
// For example, given the following array:
// [34.5, 56.2, 11, 13]

let arr = [34.5, 56.2, 11, 13];
let result;

for (let i=0; i < arr.length; i++){
    result = (Math.round(arr[i] / 5)*5);
    arr [i]= result;
    //console.log(result);
    }
console.log(arr);


