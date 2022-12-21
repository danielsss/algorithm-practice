import { ListNode } from './linkedList';
import { Comparator } from '../utils';

class LinkedList extends Comparator {

  /**
   * 206. Reverse Linked List
   * @param head
   */
  public reverse(head: ListNode): ListNode | null {
    if (!head || head.next === null) {
      return head;
    }

    let last = this.reverse(head.next);
    head.next.next = head;
    head.next = null;
    return last;
  }

  /**
   * 21. Merge Two Sorted Lists
   * @param list1
   * @param list2
   */
  public mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
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

  /**
   * 141. Linked List Cycle
   * @param head
   */
  public hasCircle(head: ListNode): boolean {
    let slow = head;
    let fast = head;

    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (this.equal(slow, fast)) {
        return true;
      }
    }

    return false;
  }
}

export default LinkedList;