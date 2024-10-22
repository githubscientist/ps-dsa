/*
    Algorithm:

    1. Get the two numbers <- num1, num2
    2. Generate all the divisors of num1
        3. Find which of them are factors of num1 <- factorsNum1

    4. Sum all the factors of num1 <- sNum1
    5. Check if sNum1 == num2
        6. If false => break the execution and
        print that they are not amicable numbers
        7. If true =>
            8. Generate all the divisors of num2
                9. For each of this divisor, check which of them are factors of num2 <- factorsNum2

            10. Sum all the factors of num2 <- sNum2

            11. Check if sNum2 == num1
                12. If false => print they are not amicable numbers
                13. If true => print that they are amicable numbers.
*/

// // 1. Get the two numbers <- num1, num2
// let num1 = 220;
// let num2 = 284;

// let factorsNum1 = [];
// let factorsNum2 = [];

// // 2. Generate all the divisors of num1
// for (let divisor = 1; divisor <= num1 / 2; divisor++) {
//     // 3. Find which of them are factors of num1 <- factorsNum1
//     // check whether divisor is a factor of num1 or not
//     if (num1 % divisor === 0) {
//         // divisor is a factor of num1
//         factorsNum1.push(divisor);
//     }
// }

// // 4. Sum all the factors of num1 <- sNum1
// let sNum1 = factorsNum1.reduce((p, c) => p + c);

// // 5. Check if sNum1 == num2
// if (sNum1 !== num2) {
//     // 6. If false => break the execution and
//     // print that they are not amicable numbers
//     console.log('Not Amicable numbers');
// } else {
//     // 7. If true =>
//     // 8. Generate all the divisors of num2
//     for (let divisor = 1; divisor <= num2 / 2; divisor++) {
//         // 9. For each of this divisor, check which of them are factors of num2 <- factorsNum2
//         if (num2 % divisor === 0) {
//             factorsNum2.push(divisor);
//         }
//     }

//     // 10. Sum all the factors of num2 <- sNum2
//     let sNum2 = factorsNum2.reduce((p, c) => p + c);

//     // 11. Check if sNum2 == num1
//     if (sNum2 !== num1) {
//         // 12. If false => print they are not amicable numbers
//         console.log("Not Amicable numbers");
//     } else {
//         console.log("Amicable Numbers");
//     }
// }

// -------------------------

function findSumFactors(number) {
    let sNum = 0;
    for (let divisor = 1; divisor <= number / 2; divisor++) if (number % divisor === 0) sNum += divisor;
    return sNum;
}

function isAmicable(num1, num2) {
    let sNum1 = findSumFactors(num1);

    if (sNum1 !== num2) console.log('Not Amicable numbers');
    else {
        let sNum2 = findSumFactors(num2);
        if (sNum2 !== num1) console.log("Not Amicable numbers");
        else console.log("Amicable Numbers");
    }
}

isAmicable(220, 284); // Amicable
isAmicable(200, 400); // Not Amicable
isAmicable(1184, 1210); // Amicable