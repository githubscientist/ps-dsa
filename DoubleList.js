class Node {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class DoubleList {
    constructor() {
        this.head = null;
    }

    insertAtTail(data) {
        // create a new node
        let newNode = new Node(data);

        // check if the list is empty
        if (this.head === null) {
            this.head = newNode;
        } else {
            let thead = this.head;

            while (thead.next != null) {
                thead = thead.next;
            }

            // when the thead.next is null
            // means the thead is the tail node
            thead.next = newNode;
            newNode.prev = thead;
        }
    }

    insertAtHead(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;

            this.head = newNode;
        }
    }

    toArray() {
        let nodes = [];

        let thead = this.head;

        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        return nodes;
    }

    deleteAtHead() {
        if (this.head != null) {
            this.head = this.head.next;
            this.head.prev = null;
        }
    }

    deleteAtTail() {
        if (this.head != null) {
            if (this.head.next === null) {
                // if the list has only one node
                this.head = null;
            } else {
                // the list has more nodes
                let thead = this.head;

                while (thead.next.next != null) {
                    thead = thead.next;
                }

                // thead.next.next === null
                thead.next = null;
            }
        }
    }
}

let dlist = new DoubleList();

dlist.insertAtTail(4);
dlist.insertAtTail(5);
dlist.insertAtTail(6);
dlist.insertAtTail(8);
dlist.insertAtTail(10);

dlist.insertAtHead(2);
dlist.insertAtHead(10);

dlist.deleteAtHead();
dlist.deleteAtHead();
dlist.deleteAtTail();
dlist.deleteAtTail();

console.log(dlist.toArray());