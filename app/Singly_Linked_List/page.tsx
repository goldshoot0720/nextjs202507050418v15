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
      if (this.length === 0 || this.head === null) {
        return "null";
      }
      if (this.length === 1 && this.head) {
        return String(this.head.value);
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

    append(value: number) {
      const newNode = new ListNode(value);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
      } else {
        this.tail!.next = newNode;
        this.tail = newNode;
        this.length += 1;
      }
    }

    prepend(value: number) {
      const newNode = new ListNode(value);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length += 1;
    }

    traverse() {
      let node = this.head;
      while (node) {
        console.log(node.value);
        node = node.next;
      }
    }
  }

  const [dummy, setDummy] = useState(0);
  const linkedListRef = useRef(new LinkedList());
  const linkedList = linkedListRef.current;
  const [num, setNum] = useState(0);

  return (
    <>
      <p>Singly Linked List</p> {/* 這裡改成 Singly */}
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
      <p>length:{linkedList.length}</p>
    </>
  );
}
