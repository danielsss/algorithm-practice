import { ListNode } from './linkedList';


export function middleNode(head: ListNode): ListNode | null {

  let slow = head;
  let fast = head;

  while(fast && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}