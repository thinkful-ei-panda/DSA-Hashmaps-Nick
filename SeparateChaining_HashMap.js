export default class SeparateChaining_HashMap {
  constructor(size) {
    this.size = size;
    this._hashTable = [];
    this._hashTable.length = this.size;
  }

  computeHash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    if (typeof (key) !== 'number' && typeof (key) !== 'string') {
      throw 'Invalid key type';
    }

    let hash = this.computeHash(key);
    if (this._hashTable[hash] === undefined) {
      this._hashTable[hash] = new _SingllyLinkedList();
    }

    let chain = this._hashTable[hash];
    if (chain.find(key)) {
      throw 'Duplicates not allowed';
    }

    chain[key] = value;
  }

  get(key) {
    if (typeof (key) !== 'number' && typeof (key) !== 'string') {
      return undefined;
    }

    let hash = this.computeHash(key);
    if (this._hashTable[hash] === undefined) {
      return undefined;
    }

    let chain = this._hashTable[hash];
    if (chain.find(key)) {
      return chain[key];
    }

    return undefined;
  }
}

class _SingllyLinkedList {
  constructor() {
    this.key = null;
    this.head = null;
    this.tail = null;
  }

  insertFirst(key, value) {
    const newNode = new _Node(key, value, this.head);
    this.head = newNode;
    if (!this.tail)
      this.tail = newNode;
  }

  insertLast(key, value) {
    if (!this.head)
      this.insertFirst(key, value);
    else {
      let newNode = new _Node(key, value, this.tail);
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  find(key) {
    let currentNode = this.head;

    while (currentNode && currentNode.key !== key) {
      currentNode = currentNode.next;
    }
    if (!currentNode) {
      console.log(`${key} not in list`);
      return null;
    }
    return currentNode;
  }

  printList() {
    let currNode = this.head;
    console.log('List: ', this.key);
    while (currNode !== null) {
      console.log(`${currNode.value}`);
      currNode = currNode.next;
    }
  }
}

class _Node {
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}