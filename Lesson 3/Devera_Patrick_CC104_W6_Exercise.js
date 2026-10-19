'use strict';
 
console.log('CAMPUS IT SUPPORT REQUEST MANAGER');
 
// ================================================================
// PART A: STACK
// ================================================================
 
class Stack {
  constructor() {
    // Internal storage for the stack, implemented using an array.
    this.items = [];
  }
 
  // Adds an element to the top of the stack.
  push(element) {
    this.items.push(element);
  }
 
  // Removes and returns the top element of the stack.
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }
 
  // Returns the top element without removing it.
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }
 
  // Returns true when the stack has no elements.
  isEmpty() {
    return this.items.length === 0;
  }
 
  // Returns the number of elements currently in the stack.
  size() {
    return this.items.length;
  }
 
  // Returns all elements (top to bottom order not required here)
  // joined as a readable comma-separated string.
  toString() {
    return this.items.join(', ');
  }
}
 
console.log('\nPART A: UNDO HISTORY');
 
const actionHistory = new Stack();
 
// Push the three required actions onto the stack, in order.
actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');
 
// Display the current top action using peek().
console.log('Top Action:', actionHistory.peek());
 
// Undo (remove) the most recent action using pop().
console.log('Undo Action:', actionHistory.pop());
 
// Display the remaining actions and the current stack size.
console.log('Remaining Actions:', actionHistory.toString());
console.log('Stack Size:', actionHistory.size());
 
// ================================================================
// PART B: QUEUE
// ================================================================
 
class Queue {
  constructor() {
    // Internal storage for the queue, implemented using an array.
    this.items = [];
  }
 
  // Adds an element at the back of the queue.
  enqueue(element) {
    this.items.push(element);
  }
 
  // Removes and returns the front element of the queue.
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }
 
  // Returns the front element without removing it.
  front() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }
 
  // Returns true when the queue has no elements.
  isEmpty() {
    return this.items.length === 0;
  }
 
  // Returns the number of elements currently in the queue.
  size() {
    return this.items.length;
  }
 
  // Returns all elements, front to back, as a readable string.
  toString() {
    return this.items.join(', ');
  }
}
 
console.log('\nPART B: WAITING REQUESTS');
 
const waitingRequests = new Queue();
 
// Enqueue the four required requests in their arrival order.
waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');
 
// Display the request currently at the front.
console.log('Next Request:', waitingRequests.front());
 
// Process (remove) two requests using dequeue().
console.log('Processed:', waitingRequests.dequeue());
console.log('Processed:', waitingRequests.dequeue());
 
// Display the remaining queue and its current size.
console.log('Remaining Requests:', waitingRequests.toString());
console.log('Queue Size:', waitingRequests.size());
 
// ================================================================
// PART C: PRIORITY QUEUE
// ================================================================
 
class PriorityQueue {
  constructor() {
    // Internal storage for the priority queue.
    this.items = [];
  }
 
  // Creates an item containing the request and priority, then
  // inserts it at the correct position (smaller number = higher
  // priority). Requests with equal priority keep arrival order
  // because we only insert BEFORE the first item with a strictly
  // larger priority number.
  enqueue(request, priority) {
    const queueItem = { request: request, priority: priority };
 
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (queueItem.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueItem);
        added = true;
        break;
      }
    }
 
    // If no earlier position was found, add it to the end.
    if (!added) {
      this.items.push(queueItem);
    }
  }
 
  // Removes and returns the first (highest priority) item.
  dequeue() {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items.shift();
  }
 
  // Returns the number of items currently in the priority queue.
  size() {
    return this.items.length;
  }
 
  // Displays every request together with its priority number.
  print() {
    this.items.forEach((item) => {
      console.log(`${item.request}, Priority ${item.priority}`);
    });
  }
}
 
console.log('\nPART C: URGENT REQUESTS');
 
const urgentRequests = new PriorityQueue();
 
// Enqueue the four required requests in the given order.
urgentRequests.enqueue('Ticket #301 - Install Browser', 3);
urgentRequests.enqueue('Ticket #302 - Server Offline', 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);
 
// Print the initial priority order.
console.log('Initial Priority Order:');
urgentRequests.print();
 
// Process (remove) the first request in the priority queue.
const processedUrgent = urgentRequests.dequeue();
console.log(
  'Processed Priority Request:',
  `${processedUrgent.request}, Priority ${processedUrgent.priority}`
);
 
// Print the remaining priority requests.
console.log('Remaining Priority Requests:');
urgentRequests.print();
 
// ================================================================
// PART D: LINKED LIST
// ================================================================
 
class Node {
  constructor(element) {
    // Store the data held by this node.
    this.element = element;
    // Pointer to the next node in the list; null means no next node.
    this.next = null;
  }
}
 
class LinkedList {
  constructor() {
    // Number of nodes currently in the list.
    this.length = 0;
    // Reference to the first node in the list.
    this.head = null;
  }
 
  // Adds a new node containing the element at the end of the list.
  append(element) {
    const node = new Node(element);
 
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
 
    this.length++;
  }
 
  // Inserts a new node containing the element at the given position.
  // Valid positions range from 0 to this.length (inclusive), where
  // this.length means "insert at the end".
  insert(position, element) {
    if (position < 0 || position > this.length) {
      return false;
    }
 
    const node = new Node(element);
 
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let previous = this.head;
      for (let i = 0; i < position - 1; i++) {
        previous = previous.next;
      }
      node.next = previous.next;
      previous.next = node;
    }
 
    this.length++;
    return true;
  }
 
  // Removes the node found at the given position and returns its element.
  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return undefined;
    }
 
    let removedNode;
 
    if (position === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let previous = this.head;
      for (let i = 0; i < position - 1; i++) {
        previous = previous.next;
      }
      removedNode = previous.next;
      previous.next = removedNode.next;
    }
 
    this.length--;
    return removedNode.element;
  }
 
  // Traverses the list and returns the position of the matching
  // element, or -1 if the element is not found.
  indexOf(element) {
    let current = this.head;
    let index = 0;
 
    while (current !== null) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    }
 
    return -1;
  }
 
  // Finds the element's position with indexOf(), then removes it
  // using removeAt().
  remove(element) {
    const index = this.indexOf(element);
    if (index === -1) {
      return undefined;
    }
    return this.removeAt(index);
  }
 
  // Returns true when the list contains no nodes.
  isEmpty() {
    return this.length === 0;
  }
 
  // Returns the current number of nodes in the list.
  size() {
    return this.length;
  }
 
  // Traverses the list and returns all elements as a readable string.
  toString() {
    let current = this.head;
    const elements = [];
 
    while (current !== null) {
      elements.push(current.element);
      current = current.next;
    }
 
    return elements.join(', ');
  }
}
 
console.log('\nPART D: COMPLETED REQUESTS');
 
const completedRequests = new LinkedList();
 
// Append the three required requests, in order.
completedRequests.append('Ticket #401 - Account Activated');
completedRequests.append('Ticket #402 - Printer Connected');
completedRequests.append('Ticket #403 - Antivirus Updated');
 
// Insert Ticket #400 at the very beginning of the list.
completedRequests.insert(0, 'Ticket #400 - Computer Diagnosed');
 
// Insert Ticket #405 at the end of the list using insert().
completedRequests.insert(completedRequests.size(), 'Ticket #405 - Browser Updated');
 
// Display the complete list.
console.log('Complete List:', completedRequests.toString());
 
// Find and display the index of Ticket #402.
console.log(
  'Index of Ticket #402:',
  completedRequests.indexOf('Ticket #402 - Printer Connected')
);
 
// Remove the item at position 1 using removeAt().
console.log('Removed at Position 1:', completedRequests.removeAt(1));
 
// Remove Ticket #403 by value using remove().
console.log('Removed by Value:', completedRequests.remove('Ticket #403 - Antivirus Updated'));
 
// Display the final list and its size.
console.log('Final List:', completedRequests.toString());
console.log('Final Size:', completedRequests.size());