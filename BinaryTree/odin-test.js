import Tree from "./Tree.js";

const tree = new Tree();

function createRandomNNumbers(n, min, max) {
  let arr = [];
  for (let i = 0; i < 19; i++) {
    arr.push(Math.ceil(Math.random() * max) + min);
  }
  return arr;
}

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

// Generate up to 19 non-unique numbers from range of 0-100 max;
const rndArray = createRandomNNumbers(19, 0, 100);

tree.buildTree(rndArray);
console.log("Is Balanced?", tree.isBalanced());

console.log("LevelOrder");
// tree.levelOrder((node) => console.log(node.data));
tree.levelOrderRecursive((node) => console.log(node.data));
console.log("InOrder");
tree.inOrder((node) => console.log(node.data));
console.log("PreOrder");
tree.preOrder((node) => console.log(node.data));
console.log("PostOrder");
tree.postOrder((node) => console.log(node.data));

prettyPrint(tree.root);

// Create 5 more numbers in range of 100-999;
const moreRndNumbers = createRandomNNumbers(5, 100, 999);

moreRndNumbers.forEach((number) => {
  tree.insertRecursive(number);
});

console.log("Is Balanced?", tree.isBalanced());
console.log("Balancing tree...");
tree.rebalance();
console.log("Is Balanced?", tree.isBalanced());

console.log("LevelOrder");
// tree.levelOrder((node) => console.log(node.data));
tree.levelOrderRecursive((node) => console.log(node.data));
console.log("InOrder");
tree.inOrder((node) => console.log(node.data));
console.log("PreOrder");
tree.preOrder((node) => console.log(node.data));
console.log("PostOrder");
tree.postOrder((node) => console.log(node.data));

prettyPrint(tree.root);
