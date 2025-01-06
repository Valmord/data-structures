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

  _insertRecursive(value, node) {
    if (value >= node.data) {
      if (!node.right) {
        node.right = new Node(value);
        return;
      }
      this._insertRecursive(value, node.right);
    } else {
      if (!node.left) {
        node.left = new Node(value);
        return;
      }
      this._insertRecursive(value, node.left);
    }
  }

  insertRecursive(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this._insertRecursive(value, this.root);
    }
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

  _deleteNode(value, node) {
    if (!node) return null;
    if (node.data === value) {
    }
    if (value < node.data) {
      node.left = this._deleteNode(value, node.left);
    } else if (value > node.data) {
      node.right = this._deleteNode(value, node.right);
    } else {
      // Case for 0-1 child
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      let current = node.right;
      while (current && current.left) {
        current = current.left;
      }

      node.data = current.data;
      node.right = this._deleteNode(current.data, node.right);
    }

    return node;
  }

  deleteNode(value) {
    if (!this.root) return;
    this._deleteNode(value, this.root);
  }

  _find(value, node) {
    if (value < node.data) return this._find(value, node.left);
    if (value > node.data) return this._find(value, node.right);
    return node;
  }

  find(value) {
    if (!this.root) return null;
    return this._find(value, this.root);
  }

  levelOrder(callback) {
    if (!callback || typeof callback !== "function")
      throw new Error("Callback function required");

    const queue = [this.root];
    let index = 0;
    let node = queue[index];
    while (node) {
      callback(node);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
      index++;
      node = queue[index];
    }
  }

  levelOrderRecursive(callback) {}
}
