function recursive(num){
    if(num <= 1){
        return num
    }
    return recursive(num-1) + recursive(num - 2);
}
console.log(recursive(10))


// Power Function: Write a recursive function to calculate the result of raising a number to a given power.

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2, 3));