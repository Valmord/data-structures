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

  find(value) {
    if (!this.root) return null;

    function findRecursion(node) {
      if (value < node.data) return findRecursion(node.left);
      if (value > node.data) return findRecursion(node.right);
      return node;
    }

    return findRecursion(this.root);
  }

  _checkCallback(callback) {
    if (!callback || typeof callback !== "function")
      throw new Error("Callback function required");
  }

  levelOrder(callback) {
    this._checkCallback(callback);
    if (!this.root) return null;

    const queue = [this.root];
    while (queue.length > 0) {
      let node = queue.shift();
      callback(node);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }

  levelOrderRecursive(callback) {
    this._checkCallback(callback);
    if (!this.root) return null;

    const queue = [this.root];

    function traverseTree() {
      const node = queue.shift();
      if (!node) return;
      callback(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      traverseTree();
    }

    traverseTree();
  }

  inOrder(callback) {
    this._checkCallback(callback);
    if (!this.root) return null;

    function traverseTree(node) {
      if (node === null) return;
      traverseTree(node.left);
      callback(node);
      traverseTree(node.right);
    }

    traverseTree(this.root);
  }

  preOrder(callback) {
    this._checkCallback(callback);
    if (!this.root) return null;

    function traverseTree(node) {
      if (node === null) return;
      callback(node);
      traverseTree(node.left);
      traverseTree(node.right);
    }

    traverseTree(this.root);
  }

  postOrder(callback) {
    this._checkCallback(callback);
    if (!this.root) return null;

    function traverseTree(node) {
      if (node === null) return;
      traverseTree(node.left);
      traverseTree(node.right);
      callback(node);
    }

    traverseTree(this.root);
  }

  height(node) {
    if (node === null) return -1;
    return Math.max(this.height(node.left), this.height(node.right)) + 1;
  }

  depth(node) {
    function traverseTree(root) {
      if (root === null) return -1;
      if (root === node) return 0;
      if (node.data < root.data) return traverseTree(root.left) + 1;
      return traverseTree(root.right) + 1;
    }

    return traverseTree(this.root);
  }

  isBalanced(node = this.root) {
    // start at root
    // compare left to right (max)
    // if left vs right > 2, return imbalanced
    // if lvr is 0 or 1, balanced

    if (node === null) return true;

    const left = this.height(node.left);
    const right = this.height(node.right);

    if (
      Math.abs(left - right) <= 1 &&
      this.isBalanced(node.left) &&
      this.isBalanced(node.right)
    )
      return true;

    return false;
  }
}
