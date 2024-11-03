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

    toArray() {
        let nodes = [];
        let thead = this.head;

        while (thead !== null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        return nodes;
    }

    getLength() {
        // return this.toArray().length;

        let nodes = 0;
        let thead = this.head;

        while (thead !== null) {
            nodes++;
            thead = thead.next;
        }

        return nodes;
    }

    // insertAtTail
    push(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let thead = this.head;

            while (thead.next !== null) {
                thead = thead.next;
            }

            // thead.next will now be null
            thead.next = newNode;
        }
    }

    forEach(callbackfn) {
        let thead = this.head;
        let index = 0;
        let nodes = this.toArray();

        while (thead != null) {
            callbackfn(thead.data, index++, nodes);
            thead = thead.next;
        }
    }

    // deleteAtTail
    pop() {
        // allow the pop operation only if the list is not empty
        if (this.head != null) {
            // check if the list has one node
            if (this.head.next === null) {
                // linked list has only one node
                this.head = null;
            } else {
                // if the list has more than one node
                // place a pointer to the head <- tailPrevious
                let tailPrevious = this.head;

                while (tailPrevious.next.next !== null) {
                    tailPrevious = tailPrevious.next;
                }

                // tailPrevious.next.next is null
                tailPrevious.next = null;
            }
        }
    }

    // insertAtHead
    unshift(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // deleteAtHead
    shift() {
        if (this.head != null) {
            this.head = this.head.next;
        }
    }
}

let list = new LinkedList();

list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);

list.pop();

list.unshift(2);
list.unshift(20);

list.shift();
list.shift();
list.shift();

console.log(list.toArray());
console.log(`Length of the list is: ${list.getLength()}`);

// list.forEach((value, index, array) => {
//     console.log(value, index, array);
// });

/*
    list.head = Node {
        data: 3,
        next: Node {
            data: 4,
            next: Node {
                data: 5,
                next: null
            }
        }
    }
    
    thead = Node {
        data: 5,
        next: null
    }
*/