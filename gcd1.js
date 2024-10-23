function gcd(num1, num2) {
    // find the factors of num1
    let factors1 = Array.from({ length: num1 }, (_, i) => {
        if (num1 % (i + 1) === 0) return i + 1;
    }).filter(val => val !== undefined)

    // find the factors of num2
    let factors2 = Array.from({ length: num2 }, (_, i) => {
        if (num2 % (i + 1) === 0) return i + 1;
    }).filter(val => val !== undefined);

    // find the common factors
    let commonFactors = factors1.reduce((previousValue, currentValue) => {
        if (factors2.includes(currentValue)) {
            return [...previousValue, currentValue];
        }
        return previousValue;
    }, [])

    // greatest common factor
    return Math.max(...commonFactors);
}

console.log(gcd(24, 96));


// function commonReducer(previousValue, currentValue) {
//     if (factors2.includes(currentValue)) {
//         return [...previousValue, currentValue];
//     } else {
//         return previousValue;
//     }
// }

// let commonReducer = function (previousValue, currentValue) {
//     if (factors2.includes(currentValue)) {
//         return [...previousValue, currentValue];
//     } else {
//         return previousValue;
//     }
// }


// let factors1 = [1, 2, 3, 4, 6, 8, 12, 24];
// let factors2 = [1, 2, 3, 4, 6, 9, 12, 18, 36];

// console.log(factors1.reduce(function (previousValue, currentValue) {
//     if (factors2.includes(currentValue)) {
//         return [...previousValue, currentValue];
//     } else {
//         return previousValue;
//     }
// }, []));

// console.log(factors1.reduce((previousValue, currentValue) => {
//     if (factors2.includes(currentValue)) {
//         return [...previousValue, currentValue];
//     }
//     return previousValue;
// }, []));