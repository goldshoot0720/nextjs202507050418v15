"use client";
import { useState, useRef } from "react";

export default function Circular_Singly_Linked_List() {
  class ListNode {
    value: number;
    next: ListNode;

    constructor(value: number) {
      this.value = value;
      // 暫時設為自身，會在 append 時正確設置
      this.next = this;
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
      let node: ListNode = this.head;
      let str = "";
      let count = 0;

      do {
        str += node.value;
        node = node.next;
        count++;
        if (node !== this.head) {
          str += " -> ";
        }
        if (count > this.length) break; // 安全機制，避免意外無限迴圈
      } while (node !== this.head);

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
        newNode.next = newNode; // 自己指向自己
      } else if (this.tail && this.head) {
        this.tail.next = newNode;
        newNode.next = this.head;
        this.tail = newNode;
      }
      this.length += 1;
    }

    traverse() {
      if (this.length === 0 || this.head === null) {
        console.log("null");
        return;
      }

      let node: ListNode = this.head;
      let count = 0;

      do {
        console.log(node.value);
        node = node.next;
        count++;
        if (count > this.length) break; // 安全機制
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
            setDummy(dummy + 1); // 觸發重新 render
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
