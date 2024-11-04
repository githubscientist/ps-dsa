// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    push(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let thead = this.head;
            while (thead.next != null) {
                thead = thead.next;
            }
            thead.next = newNode;
        }
    }

    isPalindrome(head) {
        let ohead = head;

        const checkPalindrome = (head) => {
            if (head === null) return;

            checkPalindrome(head.next);

            if (ohead.data !== head.data) {
                return false;
            }

            ohead = ohead.next;

            if (ohead === null) {
                return true;
            }
        }

        return checkPalindrome(head);
    }
}

inp.on("close", () => {
    let size = Number(userInput[0]);
    let word = userInput[1];

    let list = new LinkedList();

    word.split(' ').forEach(ch => {
        list.push(ch);
    });

    if (list.isPalindrome(list.head)) {
        console.log('yes');
    } else {
        console.log('no');
    }
});