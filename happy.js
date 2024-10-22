const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const userInput = [];

rl.on('line', (input) => {
    userInput.push(input);
});

function findSumOfDigits(number) {
    // get the sum of squares of digits of the number
    let sum = 0;

    while (number > 0) {
        // take the last digit of the number
        let lastDigit = number % 10;
        sum += (lastDigit ** 2);

        // remove the last digit from the number
        number = Math.floor(number / 10);
    }

    return sum;
}

function isHappy(number) {
    let visitedNumbers = [];

    visitedNumbers.push(number);

    while (true) {
        if (number === 1) {
            return true;
        }

        number = findSumOfDigits(number);

        if (visitedNumbers.includes(number)) return false;
        else visitedNumbers.push(number);
    }
}

rl.on('close', () => {
    let number = Number(userInput[0]);

    // check whether the number is a happy number or an unhappy number
    if (isHappy(number)) {
        console.log('Happy Number');
    } else {
        console.log('Unhappy Number');
    }
});