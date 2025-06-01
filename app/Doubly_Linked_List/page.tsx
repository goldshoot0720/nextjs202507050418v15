"use client";
import { useState, useRef } from "react";

export default function Doubly_Linked_List() {
  class ListNode {
    value: number;
    next: ListNode | null;
    prev: ListNode | null;
    constructor(value: number) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }

  class LinkedList {
    head: ListNode | null;
    tail: ListNode | null;
    length: number;

    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    toString(): string {
      if (this.length === 0 || this.head === null) {
        return "null";
      }
      let node: ListNode | null = this.head;
      let str = "";
      while (node) {
        str += node.value;
        if (node.next) {
          str += " <-> ";
        }
        node = node.next;
      }
      return str;
    }

    toReverseString(): string {
      if (this.length === 0 || this.tail === null) {
        return "null";
      }
      let node: ListNode | null = this.tail;
      let str = "";
      while (node) {
        str += node.value;
        if (node.prev) {
          str += " <-> ";
        }
        node = node.prev;
      }
      return str;
    }

    append(value: number) {
      const newNode = new ListNode(value);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else if (this.tail !== null) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length += 1;
    }

    traverse() {
      console.log("traverse");
      let node: ListNode | null = this.head;
      while (node) {
        console.log(node.value);
        node = node.next;
      }
    }

    traverseReverse() {
      console.log("traverseReverse");
      let node: ListNode | null = this.tail;
      while (node) {
        console.log(node.value);
        node = node.prev;
      }
    }
  }

  const [dummy, setDummy] = useState(0);
  const linkedListRef = useRef(new LinkedList());
  const linkedList = linkedListRef.current;
  const [num, setNum] = useState(0);

  return (
    <>
      <p>Doubly Linked List</p>
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
            setDummy(dummy + 1); // 觸發畫面更新
          }}
        >
          append
        </button>
      </p>
      <p>toString: {linkedList.toString()}</p>
      <p>toReverseString: {linkedList.toReverseString()}</p>
      <p>length: {linkedList.length}</p>
    </>
  );
}
