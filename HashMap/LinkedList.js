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

  update(key, value) {
    let current = this.head;
    while (current) {
      if (current.key === key) {
        current.value = value;
        return;
      }
      current = current.next;
    }
  }

  contains(key) {
    let current = this.head;
    while (current) {
      if (current.key === key) return true;
      current = current.next;
    }
    return false;
  }

  getNode(key) {
    let current = this.head;
    while (current) {
      if (current.key === key) return current;
      current = current.next;
    }
    return false;
  }

  get(key) {
    let current = this.head;
    while (current) {
      if (current.key === key) return current.value;
      current = current.next;
    }
    return null;
  }

  has(key) {
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
    console.log(current);
    if (current) {
      const node = current.next;
      if (node === this.tail) this.tail = current;
      current.next = current.next.next;
      this.size = this.size - 1;
      return node;
    }

    return null;
  }
}
