export default function Singly_Linked_List() {
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    toString() {
      if (this.length === 0) {
        return "Empty";
      }
      if (this.length === 1) {
        return this.head.value;
      }
      let node = this.head;
      let str = "";
      while (node) {
        str += node.value;
        if (node.next) {
          str += " -> ";
        }
        node = node.next;
      }
      return str;
    }
    append(value) {
      if (this.length === 0) {
        this.tail = new Node(value);
        this.head = this.tail;
        this.length = 1;
      } else {
        this.tail.next = new Node(value);
        this.tail = this.tail.next;
        this.length += 1;
      }
    }
    prepend(value) {}
    insert(value, index) {}
    traverse() {
      let node = this.head;
      while (node) {
        console.log(node.value);
        node = node.next;
      }
    }
    search(target) {}
    get(index) {}
    setValue(index, value) {}
    popFirst() {}
    pop() {}
    remove(index) {}
    deleteAll() {}
  }

  let linkedList = new LinkedList();
  linkedList.append(1988);
  linkedList.append(2004);
  linkedList.append(2012);
  linkedList.append(2022);
  linkedList.append(2025);
  linkedList.traverse();

  return (
    <>
      <p>Singly Linked List</p>
      <p>{linkedList.toString()}</p>
    </>
  );
}
