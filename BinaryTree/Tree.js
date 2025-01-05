import Node from "./Node.js";

export default class Tree {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  _buildTree(array, start, end) {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);

    const node = new Node(array[mid]);
    node.left = this._buildTree(array, start, mid - 1);
    node.right = this._buildTree(array, mid + 1, end);

    return node;
  }

  buildTree(array) {
    const sortedArray = [...new Set(array)].sort((a, b) => a - b);

    this.root = this._buildTree(sortedArray, 0, sortedArray.length - 1);
    return this.root;
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (true) {
      if (value >= current.data) {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      }
    }
  }

  delete(value) {}
}
