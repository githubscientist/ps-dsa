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

    //  generate and print n lines
    for (let row = 1; row <= n; row++) {
        let line = [];

        // for every row
        // print n-row+1 number of stars
        // run a loop that runs for n-row+1
        for (let star = 1; star <= n - row + 1; star++) {
            line.push('*');
        }

        // the line will be ready with the actual number of stars
        // to be printed in this line
        console.log(line.join('  '));
    }
});