// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    let n = Number(userInput[0]);

    for (let row = 1, oddNumber = 1; row <= n; row++, oddNumber += 2) {
        let line = [];

        // spaces
        for (let space = 1; space <= n - row; space++) {
            line.push(' ');
        }

        for (let number = row; number <= oddNumber; number++) {
            line.push(number);
        }

        // start from oddNumber-1 to row (--)
        for (let number = oddNumber - 1; number >= row; number--) {
            line.push(number);
        }

        console.log(line.join(''));
    }
});