import { ListNode } from './linkedList';

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1 || !list2) return null
  let dummy = new ListNode(-1);

  let head = dummy;
  let p1 = list1;
  let p2 = list2;
  // [ 1, 2 ,4, 5, 6 ], [1, 3, 4]
  while(p1 !== null && p2 !== null) {
    if (p1.value < p2.value) {
      head.next = p1;
      p1 = p1.next;
    } else {
      head.next = p2;
      p2 = p2.next;
    }

    head = head.next;
  }

  if (p1 !== null) {
    head.next = p1;
  }

  if (p2 !== null) {
    head.next = p2;
  }

  return dummy.next;
}