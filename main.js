import DoubleLinkedList from "./DoubleLinkedList.js";


// const n1 = new Node(3);
// n1.printNode();

// const l1 = new DoubleLinkedList(4);
// l1.print();
// l1.pushFront(3);
// l1.print();
// l1.pushFront(5);
// l1.print();

// const l2 = new DoubleLinkedList(1);
// l2.pushBack(2);
// l2.pushBack(3);
// l2.pushBack(4);
// l2.print();

const l3 = new DoubleLinkedList(9);
l3.pushBack(4);
l3.pushBack(6);
l3.print();
console.log(l3.getArrayRepresentation("reversed"));

const l4 = new DoubleLinkedList(4);
l4.pushBack(5);
l4.pushBack(6);
l4.pop();
l4.pop();
console.log(l4.getArrayRepresentation());


const l5 = new DoubleLinkedList(89);
l5.insert(45,0);
l5.insert(38,2);
l5.pushBack(123);
l5.pushFront(999);
console.log(l5.getArrayRepresentation());
console.log(l5.getArrayRepresentation("reversed"));

