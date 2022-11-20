import { ListNode } from './linkedList';


export function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  if (head.next === null) {
    return head;
  }

  const dummy = new ListNode(-1);
  dummy.next = head;
  let cur = dummy;

  while(cur.next && cur.next.next) {
    let first = cur.next;
    let second = cur.next.next;

    cur.next = second;
    first.next = second.next;
    second.next = first;
    cur = cur.next.next;
  }

  return dummy.next;
}

// swapPairs(generateLinkedList([1,2,3,4]));