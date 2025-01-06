import Tree from "./Tree.js";

const tree = new Tree();

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// let arr = [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15];

// console.log(tree.buildTree(arr));
tree.buildTree(arr);

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

prettyPrint(tree.root);

// tree.insert(320);
// tree.insert(322);
// tree.insert(321);
// tree.insert(323);
// tree.insert(323);
// tree.insert(323);

// tree.insertRecursive(320);
// tree.insertRecursive(322);
// tree.insertRecursive(321);
// tree.insertRecursive(323);
// tree.insertRecursive(323);
// tree.insertRecursive(323);

// prettyPrint(tree.root);

tree.deleteNode(8);

prettyPrint(tree.root);

console.log(tree.find(4));

// tree.levelOrder((node) => console.log(node.data));
// tree.levelOrderRecursive((node) => console.log(node.data));
// console.log("InOrder");
// tree.inOrder((node) => console.log(node.data));
// console.log("PreOrder");
// tree.preOrder((node) => console.log(node.data));
// console.log("PostOrder");
// tree.postOrder((node) => console.log(node.data));

const node3 = tree.find(9);
console.log("Depth:", tree.depth(node3));
const node = tree.find(4);
console.log("Depth:", tree.depth(node));
const node2 = tree.find(6345);
console.log("Depth:", tree.depth(node2));

console.log("Height:", tree.height(node));
console.log("Height:", tree.height(node2));

console.log("Balanced:", tree.isBalanced());

tree.insert(999);

console.log("Balanced:", tree.isBalanced());
