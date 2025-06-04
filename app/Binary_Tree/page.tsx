"use client";
import { useEffect, useState } from "react";

export default function Binary_Tree() {
  class BTNode {
    constructor(value = null) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  class BinaryTree {
    constructor(value) {
      this.root = new BTNode(value);
    }

    AddLeftNode(value, leaf) {
      leaf.left = new BTNode(value);
    }

    AddRightNode(value, leaf) {
      leaf.right = new BTNode(value);
    }

    InOrder(node) {
      if (!node) return "";
      return (
        this.InOrder(node.left) +
        node.value.toString() +
        " " +
        this.InOrder(node.right)
      );
    }

    Traversal() {
      return this.InOrder(this.root);
    }
  }

  const [result, setResult] = useState("");

  useEffect(() => {
    let bt = new BinaryTree(1);
    bt.AddLeftNode(2, bt.root);
    bt.AddRightNode(3, bt.root);
    bt.AddLeftNode(4, bt.root.left);
    bt.AddRightNode(5, bt.root.left);
    bt.AddLeftNode(6, bt.root.right);
    bt.AddRightNode(7, bt.root.right);

    setResult(bt.Traversal());
  }, []);

  return (
    <>
      <p>Binary Tree</p>
      <p>InOrder: {result}</p>
    </>
  );
}
