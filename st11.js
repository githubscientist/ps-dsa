// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(data) {
        this.items.push(data);
        this.top++;
    }

    pop() {
        this.items.pop();
        this.top--;
    }

    isEmpty() {
        return this.top === -1;
    }

    peek() {
        return this.items[this.top];
    }
}

inp.on("close", () => {
    let words = userInput[0].split(' ');

    // create a new stack
    let stack = new Stack();

    // iterate the words array
    for (let i = 0; i < words.length; i++) {
        // for every word, 
        // check if the stack is empty
        if (stack.isEmpty()) {
            // stack is empty
            stack.push(words[i]);
        } else {
            // if the stack is not empty
            // compare the tos and the current words from words[i]
            if (words[i] !== stack.peek()) {
                stack.push(words[i]);
            } else {
                // delete the word from the stack
                stack.pop();
                // do not insert the word to the stack
                // do nothing.
            }
        }
    }

    if (!stack.isEmpty()) {
        console.log(stack.items.join(' '));
    } else {
        console.log(-1);
    }

});