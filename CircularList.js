class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularList {
    constructor() {
        this.head = null;
    }

    insertAtTail(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            let tail = this.head;

            do {
                tail = tail.next;
            } while (tail.next != this.head);

            tail.next = newNode;
            newNode.next = this.head;
        }
    }

    toArray() {
        let nodes = [];

        let thead = this.head;

        do {
            nodes.push(thead.data);
            thead = thead.next;
        } while (thead != this.head);

        return nodes;
    }
}

let clist = new CircularList();

clist.insertAtTail(3);
clist.insertAtTail(4);
clist.insertAtTail(5);
clist.insertAtTail(7);

console.log(clist.toArray());