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

    // all the diagonals should be M
    // except the diagonals, the first row, last row, first col, last col should be F
    // except the digaonals and F, rest of all the cells should be C
    for (let row = 1; row <= n; row++) {
        let line = [];

        // for each row, we need n columns
        for (let col = 1; col <= n; col++) {

            // push M in the diagonals
            if (row === col || row === n - col + 1) line.push('M');
            else {
                // the cells are not diagonals
                // check if the cells are in FR, FC, LR, LC
                if (row === 1 || col === 1 || row === n || col === n) {
                    line.push('F');
                } else {
                    // for all other cells, push 'C'
                    line.push('C');
                }
            }
        }

        console.log(line.join(' '));
    }
});