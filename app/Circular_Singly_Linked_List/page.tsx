"use client";
import { useState, useRef } from "react";
export default function Circular_Singly_Linked_List() {
  class Node {
    constructor(value: any) {
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
        return "null";
      }
      if (this.length === 1) {
        return this.head.value;
      }
      let node = this.head;
      let str = "";
      while (node.next !== this.head) {
        str += node.value;
        if (node.next) {
          str += " -> ";
        }
        node = node.next;
      }
      str += node.value;
      return str;
    }
    toTailString() {
      if (this.length === 0) {
        return "null";
      }
      if (this.length === 1) {
        return this.head.value;
      }
      return `tail is ${this.tail.value}\ntail's next is ${this.tail.next.value}\n`;
    }
    append(value) {
      if (this.length === 0) {
        this.tail = new Node(value);
        this.head = this.tail;
        this.length = 1;
      } else {
        this.tail.next = new Node(value);
        this.tail = this.tail.next;
        this.tail.next = this.head;
        this.length += 1;
      }
    }
    prepend(value) {}
    insert(value, index) {}
    traverse() {
      let node = this.head;
      if (this.length === 0) {
        console.log(node);
      }
      if (this.length === 1) {
        console.log(node.value);
      }
      while (node.next !== this.head) {
        console.log(node.value);
        node = node.next;
      }
      console.log(node.value);
    }
    search(target) {}
    get(index) {}
    setValue(index, value) {}
    popFirst() {}
    pop() {}
    remove(index) {}
    deleteAll() {}
  }

  const [dummy, setDummy] = useState(0);
  const linkedListRef = useRef(new LinkedList());
  const linkedList = linkedListRef.current;
  const [num, setNum] = useState(0);

  return (
    <>
      <p>Circular Singly Linked List</p>
      <p>
        <input
          className="text-blue-600"
          type="number"
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
        />
      </p>
      <p>
        <button
          className="text-blue-600"
          onClick={() => {
            linkedList.append(num);
            setDummy(dummy + 1);
          }}
        >
          append
        </button>
      </p>
      <p>toString:{linkedList.toString()}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: String(linkedList.toTailString()).replace(/\n/g, "<br/>"),
        }}
      />

      <p>length:{linkedList.length}</p>
    </>
  );
}
