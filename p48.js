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

    // prepare the 2D array
    let lines = [];

    // push n empty lines
    for (let line = 1; line <= n; line++) {
        lines.push([]);
    }

    let number = 1;
    let reverse = false;

    for (let col = 0; col < n; col++) {
        if (reverse) {
            for (let row = n - 1; row >= col; row--) {
                lines[row][col] = number++;
            }
        } else {
            for (let row = col; row < n; row++) {
                lines[row][col] = number++;
            }
        }
        reverse = !reverse;
    }

    console.log(lines.map(sub => sub.join(' ')).join('\n'));
});