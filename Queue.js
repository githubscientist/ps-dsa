class Queue {
    constructor() {
        this.items = [];
        this.front = this.rear = -1;
    }

    enqueue(data) {
        if (this.front === -1 && this.rear === -1) {
            // the queue is empty
            this.items.push(data);
            // update both front and rear
            this.front = this.rear = 0;
        } else {
            // if the queue is not empty
            this.items.push(data);
            // update only the rear pointer, as the front should point
            // the first element in the queue
            this.rear++;
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            // allow the deletion
            if (this.front === 0 && this.rear === 0) {
                this.items.pop();
                this.front = this.rear = -1;
            } else {
                // if the queue has more than one element
                this.items.shift();
                this.rear--;
            }
        }
    }

    isEmpty() {
        return this.front === -1 && this.rear === -1;
    }
}

let queue = new Queue();

queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(8);

queue.dequeue();

console.log(queue);