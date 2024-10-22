// function findSumOfDigits(number) {
//     // get the sum of squares of digits of the number
//     let sum = 0;

//     while (number > 0) {
//         // take the last digit of the number
//         let lastDigit = number % 10;
//         sum += (lastDigit ** 2);

//         // remove the last digit from the number
//         number = Math.floor(number / 10);
//     }

//     return sum;
// }

function isHappy(number) {
    let visitedNumbers = [];

    visitedNumbers.push(number);

    while (true) {
        if (number === 1) return true;

        number = new String(number).split('').map(num => Number(num)).reduce((p, c) => p + c ** 2, 0);

        if (visitedNumbers.includes(number)) return false;
        else visitedNumbers.push(number);
    }
}

let number = 19;

// check whether the number is a happy number or an unhappy number
if (isHappy(number)) {
    console.log('Happy Number');
} else {
    console.log('Unhappy Number');
}