"use client";
import { useState, useRef } from "react";

export default function Singly_Linked_List() {
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
      if (!this.head) return "null";

      let result = "";
      let current: ListNode | null = this.head;

      while (current) {
        result += current.value;
        if (current.next) {
          result += " -> ";
        }
        current = current.next;
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
        this.tail = newNode;
      }
      this.length++;
    }

    prepend(value: number): void {
      const newNode = new ListNode(value);
      if (!this.head || !this.tail) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
    }

    traverse(): void {
      let current: ListNode | null = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }

  const [dummy, setDummy] = useState(0);
  const linkedListRef = useRef<LinkedList>(new LinkedList());
  const linkedList = linkedListRef.current;
  const [num, setNum] = useState<number>(0);

  return (
    <>
      <p className="text-xl font-bold mb-2">Singly Linked List</p>
      <p>
        <input
          className="border px-2 py-1 text-blue-600"
          type="number"
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
        />
      </p>
      <p className="mt-2">
        <button
          className="text-blue-600 border px-3 py-1 mr-2"
          onClick={() => {
            linkedList.append(num);
            setDummy(dummy + 1); // 強制 re-render
          }}
        >
          append
        </button>
        <button
          className="text-green-600 border px-3 py-1"
          onClick={() => {
            linkedList.prepend(num);
            setDummy(dummy + 1); // 強制 re-render
          }}
        >
          prepend
        </button>
      </p>
      <p className="mt-4">toString: {linkedList.toString()}</p>
      <p>length: {linkedList.length}</p>
    </>
  );
}
