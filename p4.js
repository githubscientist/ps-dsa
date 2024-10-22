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

    for (let row = 1, spaces = 0; row <= n; row++) {
        let line = [];

        if (row === 1 || row === n) {
            // push numbers from 1 to n
            for (let number = 1; number <= row; number++) {
                line.push(number);
            }
        } else {
            // for all other lines except 1 and n
            // push 1
            line.push(1);

            // spaces
            for (let space = 1; space <= spaces; space++) {
                line.push(' ');
            }

            // push the row number
            line.push(row);

            spaces++;
        }
        console.log(line.join(''));
    }
});