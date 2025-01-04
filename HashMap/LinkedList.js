import Node from "./Node.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(key, value) {
    const node = new Node(key, value);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size += 1;
  }

  contains(key) {
    let current = this.head;
    while (current) {
      if (current.key === key) return true;
      current = current.next;
    }
    return false;
  }

  remove(key) {
    if (this.size === 0) return null;
    if (this.head.key === key) {
      const node = this.head;
      this.head = this.head.next;
      this.size = this.size - 1;
      return node;
    }

    let current = this.head;
    while (current.next && current.next.key !== key) {
      current = current.next;
    }
    if (current) {
      const node = current.next;
      current.next = current.next.next;
      this.size = this.size - 1;
      return node;
    }

    return null;
  }
}
