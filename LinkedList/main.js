import LinkedList from "./LinkedList.js";

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.prepend(0);

console.log(linkedList);
console.log("Size", linkedList.size);
console.log("head", linkedList.head);
console.log("tail", linkedList.tail);
console.log("Printing as string: ", linkedList.toString());
console.log("node @ index 3", linkedList.at(3));
console.log("node @ index 6", linkedList.at(6));
Error;
// console.log("popping", linkedList.pop());
// console.log("popping", linkedList.pop());
// console.log("popping", linkedList.pop());
// console.log("popping", linkedList.pop());
// console.log("popping", linkedList.pop());
// console.log("popping", linkedList.pop());
// console.log("Printing as string: ", linkedList.toString());

console.log("Testing if 3 in LL", linkedList.contains(3));
console.log("Testing if 7 in LL", linkedList.contains(7));
console.log("Finding Index of 3 in LL", linkedList.findIndexOf(3));
console.log("Finding Index of 7 in LL", linkedList.findIndexOf(7));

console.log("Printing as string: ", linkedList.toString());

console.log("Inserting 5 @ index 2", linkedList.insertAt(5, 2));
console.log("Printing as string: ", linkedList.toString());
console.log("Inserting 11 @ index 4", linkedList.insertAt(11, 4));
console.log("Printing as string: ", linkedList.toString());
console.log("Inserting 12 @ index 0", linkedList.insertAt(12, 0));
console.log("Printing as string: ", linkedList.toString());
console.log("Inserting 15 @ end", linkedList.insertAt(15, linkedList.size));
console.log("Printing as string: ", linkedList.toString());

console.log("Removing node @ index 3", linkedList.removeAt(3));
console.log("Printing as string: ", linkedList.toString());
