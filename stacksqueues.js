// Stacks

// google
// udemy
// youtube

// Arrays for performance
// Linked Lists for the dynamic memory

// Queues

// Matt - Joy -- Samir -- Pavel

// Arrays have indexes, O(n) to unshift
// Linked Lists work better with the head pointers

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const currentTop = this.top;
      this.top = newNode;
      this.top.next = currentTop;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

class Stack2 {
  constructor() {
    this.stack = [];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  push(value) {
    return this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack2();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
myStack.pop();
myStack.pop();
console.log(myStack.peek());
console.log(myStack);

const myQueue = new Queue();
myQueue.enqueue("google");
myQueue.enqueue("udemy");
myQueue.enqueue("discord");
myQueue.dequeue();
console.log(myQueue.peek());
console.log(myQueue);
