//Implementation of a double linked list
//1.The list is composed by Nodes (unordered in memory).
//2.Every Node has a reference to the next node and another reference to the previous node.
//3.Every Node has a certain type of data stored (it can be as abstract as the developer desires).

//==========================================IMPLEMENTATION OF CLASS NODE============================================0//

//Class that represents a container inside the double linked list
//See points 2 and 3
class Node {
  #m_prev;
  #m_next;
  #m_data;

  //A new Node only has stored data
  constructor(data = null) {
    this.#m_prev = null;
    this.#m_next = null;
    this.#m_data = data;
  }

  //Setters
  setNext(next) {
    this.#m_next = next;
  }

  setPrevious(previous) {
    this.#m_prev = previous;
  }

  setData(data) {
    this.#m_data = data;
  }

  setNext(next) {
    this.#m_next = next;
  }

  //Getters
  getNext() {
    return this.#m_next;
  }

  getPrevious() {
    return this.#m_prev;
  }

  getData() {
    return this.#m_data;
  }

  //Stringify method
  printNode() {
    console.log(`El dato del nodo es: ${this.#m_data}`);
  }
}

//Class that represents a double linked list composed by Nodes
//1. A DLL has a reference to the first and the last Node of the list
//2. When a new DLL is constructed the first and the last node references are the same

class DoubleLinkedList {
  #m_first;
  #m_last;
  #m_length;

  constructor(data = 0) {
    let newNode = new Node(data);
    this.#m_first = newNode;
    this.#m_last = newNode;
    this.#m_length = 1;
  }

  initFrom(arreglo) {
    this.#m_length = arreglo.length;
    arreglo.forEach((num, index) => {
        this.pushBack(num);
    });
    this.popFront();
  }

  //Insert node methods

  pushFront(data) {
    let newNode = new Node(data);
    newNode.setNext(this.#m_first);
    this.#m_first.setPrevious(newNode);
    this.#m_first = newNode;
    this.#m_length += 1;
  }

  pushBack(data) {
    let newNode = new Node(data);
    newNode.setPrevious(this.#m_last);
    this.#m_last.setNext(newNode);
    this.#m_last = newNode;
    this.#m_length += 1;
  }

  insert(data, position) {
    if (position === 0) this.pushFront(data);
    else if (position === this.#m_length - 1 || position >= this.#m_length) this.pushBack(data);
    else {
      let conta = 0;
      let auxReference = this.#m_first;
      while (conta < position - 1) {
        auxReference = auxReference.getNext();
        conta++;
      }
      let newNode = new Node(data);
      newNode.setPrevious(auxReference);
      newNode.setNext(auxReference.getNext());
      auxReference.setNext(newNode);
    }
  }

  //Delete node methods
  pop() {
    let oldLast = this.#m_last;
    let auxReference = oldLast.getPrevious();
    oldLast.setPrevious(null);
    auxReference.setNext(null);
    this.#m_last = auxReference;
    this.#m_length--;
  }

  popFront() {
    let oldFirst = this.#m_first;
    let auxReference = oldFirst.getNext();
    oldFirst.setNext(null);
    auxReference.setPrevious(null);
    this.#m_first = auxReference;
    this.#m_length--;
  }

  subList(position) {
    let conta = 1;
    let auxReference = this.#m_first;
    let newList = new DoubleLinkedList(auxReference.getData());
    auxReference = auxReference.getNext();
    while (conta < position) {
      newList.pushBack(auxReference.getData());
      auxReference = auxReference.getNext();
      conta++;
    }

    return newList;
  }

  getLength() {
    return this.#m_length;
  }

  likeArray(mode = "ordered") {
    let listLikeArray = [];
    let auxReference = null;
    if (mode === "ordered") {
      auxReference = this.#m_first;
      while (auxReference !== null) {
        listLikeArray.push(auxReference.getData());
        auxReference = auxReference.getNext();
      }
    } else if (mode === "reversed") {
      auxReference = this.#m_last;
      while (auxReference !== null) {
        listLikeArray.push(auxReference.getData());
        auxReference = auxReference.getPrevious();
      }
    }

    return listLikeArray;
  }

  print() {
    let auxReference = this.#m_first;
    while (auxReference !== null) {
      auxReference.printNode();
      auxReference = auxReference.getNext();
    }
  }
}

// const l5 = new DoubleLinkedList(89);
// l5.insert(45, 0);
// l5.insert(38, 2);
// l5.pushBack(123);
// l5.pushFront(999);
// l5.pop();
// l5.popFront();
// console.log(l5.likeArray());
// console.log(l5.likeArray("reversed"));

// const l6 = new DoubleLinkedList(5);
// l6.pushBack(7);
// l6.pushBack(8);
// l6.pushBack(9);
// l6.pushBack(10);

// const l7 = l6.subList(3);
// console.log(l7.likeArray());



const l8 = new DoubleLinkedList();
l8.initFrom([3,2,4,5,6,7,8,9]);
console.log((l8.likeArray()));
