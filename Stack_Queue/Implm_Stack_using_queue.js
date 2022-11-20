// Implement Stack using Queues
/*
Note: Stack is a data structure that follows the Last In First Out (LIFO) rule.

Note: Queue is a data structure that follows the First In First Out (FIFO) rule

Approach-
The idea is to keep newly entered element at the front of ‘q1’ so that pop operation dequeues from ‘q1’. ‘q2’ is used to put every new element in front of ‘q1’.

Follow the below steps to implement the push(s, x) operation:
    -> Enqueue x to q2.
    -> One by one dequeue everything from q1 and enqueue to q2.
    -> Swap the queues of q1 and q2.
Follow the below steps to implement the pop(s) operation:
    -> Dequeue an item from q1 and return it.
*/

class Stack {
  constructor() {
    this.Q1 = [];
    this.Q2 = [];
  }

  push(elem) {
    if (!elem) {
      return 'Please provide element to insert!!';
    }
    // Push elem first in isEmpty Q2
    this.Q2.push(elem);
    // Push all the remaining
    // elements in Q1 to Q2
    while (this.Q1.length != 0) {
      this.Q2.push(this.Q1.shift());
    }

    // swap the names of two queues
    this.Q = this.Q1;
    this.Q1 = this.Q2;
    this.Q2 = this.Q;
  }

  pop() {
    // if no elements are there in Q1
    if (this.Q1.length == 0) {
        return;
    }
    this.Q1.shift();
  }

  top() {
    if (this.Q1.length == 0) {
        return -1;
    }
    return this.Q1[0];
  }

  size() {
    console.log(this.Q1.length)
  }

  isEmpty() {
    // return true if the queue is empty.
    return this.Q1.length == 0;
  }

  front() {
    return this.Q1[0]
  }

}

let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
// s.size();
s.pop()
console.log(s.top())
