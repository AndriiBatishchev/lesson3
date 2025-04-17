// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.

function Kata(n){

    if(typeof n !== 'number'){
        return('Error!!');  // First, we check whether this is a number
    }
    else if (n % 2 === 0){
        return true; 
    }
    else if(n % 2 !== 0){
        return false;
    }
}

console.log(`output:'${Kata(2)}'`);
console.log(`output:'${Kata(1)}'`);
console.log(`output:'${Kata(2.2)}'`);
console.log(`output:'${Kata(0)}'`); //0 — even number
console.log(`output:'${Kata('wr')}'`);
console.log(`output:'${Kata('!')}'`);