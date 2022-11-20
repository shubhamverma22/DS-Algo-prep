//                                                              Stack
/*
LIFO
Internally It's an array, so the time complexity for adding and removing is constant
*/

class Stack {
  constructor() {
    this.items = [];
  }
  // add element to the stack (from top)
  add(element) {
    return this.items.push(element);
  }
  // remove element from the stack (from top)
  remove() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
  }
  // view last element
  peek() {
    return this.items[this.items.length - 1];
  }

  //check if the stack is empty
  isEmpty() {
    return this.items.length == 0
  }

  // this size of the stack
  size() {
    return this.items.length;
  }

  //empty the stack
  clear() {
    this.items = [];
  }
}

let stack = new Stack();
stack.add(2);
stack.add(4);
stack.add(8);
console.log(stack); // Stack { items: [ 2, 4, 8 ] }
console.log(stack.items); // [ 2, 4, 8 ]

