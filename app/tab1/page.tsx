import Link from "next/link";

export default function Tab1() {
  return (
    <>
      <p>Data Structures and Algorithms</p>
      <p>Linked List</p>
      <p>
        <Link href="/Singly_Linked_List">Singly Linked List</Link>
      </p>
      <p>
        <Link href="/Circular_Singly_Linked_List">
          Circular Singly Linked List
        </Link>
      </p>
      <p>
        <Link href="/Doubly_Linked_List">Doubly Linked List</Link>
      </p>
      <p>
        <Link href="/Recursion">Recursion</Link>
      </p>
      <p>
        <Link href="/Recursion3">Recursion3</Link>
      </p>
    </>
  );
}
