"use client";
import { useState, useRef } from "react";

export default function Circular_Singly_Linked_List() {
  class ListNode {
    value: number;
    next: ListNode | null;
    constructor(value: number) {
      this.value = value;
      this.next = null;
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
      let node = this.head;
      let str = "";
      do {
        str += node!.value;
        node = node!.next;
        if (node !== this.head) {
          str += " -> ";
        }
      } while (node !== this.head && node !== null);
      return str;
    }

    toTailString(): string {
      if (this.length === 0 || this.tail === null) {
        return "null";
      }
      return `tail is ${this.tail.value}<br/>tail's next is ${
        this.tail.next?.value ?? "null"
      }`;
    }

    append(value: number) {
      const newNode = new ListNode(value);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
        newNode.next = newNode; // 指向自己形成圓形
        this.length = 1;
      } else {
        this.tail!.next = newNode;
        newNode.next = this.head;
        this.tail = newNode;
        this.length += 1;
      }
    }

    traverse() {
      if (this.length === 0 || this.head === null) {
        console.log(null);
        return;
      }
      let node = this.head;
      do {
        console.log(node.value);
        node = node.next!;
      } while (node !== this.head);
    }
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
      <p>toString: {linkedList.toString()}</p>
      <p
        dangerouslySetInnerHTML={{
          __html: linkedList.toTailString(),
        }}
      />
      <p>length: {linkedList.length}</p>
    </>
  );
}
