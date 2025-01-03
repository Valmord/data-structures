import Node from "./Node.mjs";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size += 1;
  }

  prepend(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.tail = node;
    } else {
      node.next = this.head;
    }
    this.head = node;
    this.size += 1;
  }

  insertAt(data, index) {
    if (index === 0) {
      this.prepend(data);
      return;
    }
    if (index === this.size) {
      this.append(data);
      return;
    }
    if (index < 0 || index > this.size) {
      throw new Error(`Cannot set value to ${index}`);
    }
    if (Number.isNaN(index)) throw new Error("index must be a number!");

    const node = new Node(data);
    let current = this.head;
    let previous = null;
    for (let i = 0; i < this.size; i++) {
      if (i === index) {
        previous.next = node;
        node.next = current;
        this.size += 1;
        return "done";
      }
      previous = current;
      current = current.next;
    }
  }

  removeAtIndex(index) {
    if (index === this.size - 1) this.pop();
    if (index < 0 || index >= this.size) throw new Error("Invalid Index");

    let current = this.head;
    let previous = null;
    for (let i = 0; i < this.size; i++) {
      if (i === index) {
        previous.next = current.next;
        this.size -= 1;
        return current;
      }
      previous = current;
      current = current.next;
    }
    return current;
  }

  at(index) {
    if (this.size < index || index < 0)
      throw new Error("Cannot access LinkedList Node which doesn't exist");
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  pop() {
    let current = this.head;
    let previous = null;
    for (let i = 0; i < this.size; i++) {
      if (current.next === null) {
        previous.next = null;
        this.tail = previous;
        this.size -= 1;
        return current;
      }
      previous = current;
      current = current.next;
    }
  }

  contains(value) {
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (current.data === value) return true;
      current = current.next;
    }
    return false;
  }

  findIndexOf(value) {
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (current.data === value) return i;
      current = current.next;
    }
    return null;
  }

  toString() {
    let str = "";
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      str += `( ${current.data} ) → `;
      current = current.next;
    }
    str += "null";
    return str;
  }
}
