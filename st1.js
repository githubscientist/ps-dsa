// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

function findIndex(words) {
    for (let i = 0; i < words.length - 1; i++) {
        if (words[i] === words[i + 1]) {
            return i;
        }
    }
    return -1;
}

inp.on("close", () => {
    let words = userInput[0].split(' ');

    while (true) {
        let index = findIndex(words);
        if (index != -1) {
            words.splice(index, 2);
        } else {
            break;
        }
    }

    if (words.length > 0) {
        console.log(words.join(' '));
    } else {
        console.log(-1);
    }

});