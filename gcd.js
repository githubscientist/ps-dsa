function findFactors(number) {
    let factors = [];

    for (let divisor = 1; divisor <= number; divisor++) {
        if (number % divisor === 0) factors.push(divisor);
    }

    return factors;
}

function findCommonFactors(factors1, factors2) {
    let commonFactors = [];

    for (let index = 0; index < factors1.length; index++) {
        // for each element in factors1, check
        // whether it exists in factors2
        if (factors2.includes(factors1[index])) {
            commonFactors.push(factors1[index]);
        }
    }

    return commonFactors;
}

function findGreatestFactor(commonFactors) {
    // assuming that the first factor to be the greatestFactor
    let greatestFactor = commonFactors[0];

    for (let index = 1; index < commonFactors.length; index++) {
        if (commonFactors[index] > greatestFactor) {
            greatestFactor = commonFactors[index];
        }
    }

    return greatestFactor;
}

function gcd(num1, num2) {
    // find the factors of num1
    let factors1 = findFactors(num1);

    // find the factors of num2
    let factors2 = findFactors(num2);

    // find the common factors
    let commonFactors = findCommonFactors(factors1, factors2);

    // greatest common factor
    return findGreatestFactor(commonFactors);
}

console.log(gcd(24, 96));