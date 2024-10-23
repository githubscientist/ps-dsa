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
    let line;

    // print n lines of stars
    for (let row = 1; row <= n; row++) {
        line = [];
        // for each line, print row number of stars
        for (let star = 1; star <= row; star++) {
            line.push('*');
        }

        console.log(line.join(''));
    }

    // print n-1 lines of stars
    for (let row = 1; row <= n - 1; row++) {
        // for each line, print n-row number of stars
        line = [];
        for (let star = 1; star <= n - row; star++) {
            line.push('*');
        }

        console.log(line.join(''));
    }
});