import Node from "./Node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size += 1;
  }

  prepend(data) {
    const node = new Node(data);
    if (!this.head) {
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
      return "done";
    }
    if (index < 0 || index > this.size) return null;
    if (Number.isNaN(index)) return null;

    let current = this.head;

    while (index > 1) {
      index--;
      current = current.next;
    }

    const node = new Node(data);

    [current.next, node.next] = [node, current.next];
    this.size = this.size + 1;
    return "done";
  }

  remove(value) {
    if (this.size === 0) return null;
    if (this.head.data === value) {
      this.head = this.head.next;
      this.size = this.size - 1;
      return value;
    }

    let current = this.head;
    while (current.next && current.next.data !== value) {
      current = current.next;
    }
    if (current) {
      current.next = current.next.next;
      this.size = this.size - 1;
      return value;
    }

    return null;
  }

  removeAt(index) {
    if (this.size === 0) return null;
    if (index === this.size - 1) return this.pop();
    if (index < 0 || index >= this.size) return null;

    if (index === 0) {
      const node = this.head;
      this.head = this.head.next;
      this.size = this.size - 1;

      return node;
    }

    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      currentIndex++;
      current = current.next;
    }

    const node = current.next;
    current.next = current.next.next;
    this.size = this.size - 1;

    return node;
  }

  at(index) {
    if (this.size < index || index < 0) return null;
    let current = this.head;
    let currentIndex = 0;
    while (currentIndex !== index) {
      currentIndex++;
      current = current.next;
    }

    return current;
  }

  pop() {
    if (this.size === 0) return null;
    if (this.head === this.tail) {
      const node = this.head;
      this.head = null;
      this.tail = null;
      this.size--;
      return node;
    }

    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    let removedNode = this.tail;
    current.next = null;
    this.tail = current;
    this.size--;
    return removedNode;
  }

  contains(value) {
    let current = this.head;
    while (current) {
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
