
import { ListNode } from './linkedList';

export function removeDuplicate(head: ListNode) {
  let slow = head;
  let fast = head;
  while(fast) {
    if (slow.value !== fast.value) {
      slow.next = fast;
      slow = slow.next;
    }

    fast = fast.next;
  }

  // cut off the linked list
  slow.next = null;
  return head;
}