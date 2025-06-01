"use client";
import { useState, useRef } from "react";

export default function Circular_Singly_Linked_List() {
  class ListNode {
    value: number;
    next: ListNode;

    constructor(value: number) {
      this.value = value;
      this.next = this; // 預設指向自己
    }
  }

  class LinkedList {
    head: ListNode | null = null;
    tail: ListNode | null = null;
    length = 0;

    append(value: number) {
      const newNode = new ListNode(value);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
        newNode.next = newNode; // 單一節點自環
      } else if (this.tail && this.head) {
        this.tail.next = newNode;
        newNode.next = this.head;
        this.tail = newNode;
      }
      this.length++;
    }

    toString(): string {
      if (!this.head || this.length === 0) return "null";

      const result: string[] = [];
      let node = this.head;
      let count = 0;

      do {
        result.push(String(node.value));
        node = node.next;
        count++;
        if (count > this.length) break; // 安全機制
      } while (node !== this.head);

      return result.join(" -> ");
    }

    tailInfo(): string {
      if (!this.tail || this.length === 0) return "tail is null";
      return `tail is ${this.tail.value}, tail.next is ${
        this.tail.next?.value ?? "null"
      }`;
    }

    traverse() {
      if (!this.head || this.length === 0) {
        console.log("null");
        return;
      }

      let node = this.head;
      let count = 0;
      do {
        console.log(node.value);
        node = node.next;
        count++;
        if (count > this.length) break;
      } while (node !== this.head);
    }
  }

  const [dummy, setDummy] = useState(0);
  const linkedListRef = useRef(new LinkedList());
  const linkedList = linkedListRef.current;
  const [num, setNum] = useState(0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Circular Singly Linked List</h2>

      <input
        className="border p-1 text-blue-600"
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />

      <button
        className="ml-2 px-3 py-1 bg-blue-500 text-white rounded"
        onClick={() => {
          linkedList.append(num);
          setDummy((prev) => prev + 1);
        }}
      >
        Append
      </button>

      <p className="mt-4">toString: {linkedList.toString()}</p>
      <p>{linkedList.tailInfo()}</p>
      <p>Length: {linkedList.length}</p>
    </div>
  );
}
