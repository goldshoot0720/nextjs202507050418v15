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
      if (!this.head) return "null";

      let node: ListNode | null = this.head;
      let result = "";

      while (node) {
        result += node.value;
        if (node.next) {
          result += " <-> ";
        }
        node = node.next;
      }

      return result;
    }

    toReverseString(): string {
      if (!this.tail) return "null";

      let node: ListNode | null = this.tail;
      let result = "";

      while (node) {
        result += node.value;
        if (node.prev) {
          result += " <-> ";
        }
        node = node.prev;
      }

      return result;
    }

    append(value: number): void {
      const newNode = new ListNode(value);
      if (!this.head || !this.tail) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;
    }

    traverse(): void {
      console.log("traverse:");
      let node: ListNode | null = this.head;
      while (node) {
        console.log(node.value);
        node = node.next;
      }
    }

    traverseReverse(): void {
      console.log("traverseReverse:");
      let node: ListNode | null = this.tail;
      while (node) {
        console.log(node.value);
        node = node.prev;
      }
    }
  }

  const [dummy, setDummy] = useState(0);
  const linkedListRef = useRef<LinkedList>(new LinkedList());
  const linkedList = linkedListRef.current;
  const [num, setNum] = useState<number>(0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Doubly Linked List</h2>

      <div className="mb-2">
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
          className="border px-2 py-1 text-blue-600"
        />
      </div>

      <div className="mb-4">
        <button
          onClick={() => {
            linkedList.append(num);
            setDummy(dummy + 1); // 強制重新渲染
          }}
          className="bg-blue-100 text-blue-600 px-3 py-1 border rounded"
        >
          append
        </button>
      </div>

      <p>
        <strong>toString:</strong> {linkedList.toString()}
      </p>
      <p>
        <strong>toReverseString:</strong> {linkedList.toReverseString()}
      </p>
      <p>
        <strong>length:</strong> {linkedList.length}
      </p>
    </div>
  );
}
