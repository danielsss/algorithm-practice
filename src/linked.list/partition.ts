import { ListNode } from './linkedList';


export function partition(head: ListNode | null, x: number): ListNode | null {
  let dummy_1 = new ListNode(-1);
  let dummy_2 = new ListNode(-1);
  let cur = head;
  let last1 = dummy_1;
  let last2 = dummy_2;
  while(cur) {
    if (cur.value < x) {
      last1.next = cur;
      last1 = cur;
    } else {
      last2.next = cur;
      last2 = cur;
    }
    let tmp = cur.next;
    cur.next = null;
    cur = tmp;
  }

  last1.next = dummy_2.next;
  return dummy_1.next;
}

