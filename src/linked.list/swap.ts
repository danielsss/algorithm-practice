import { ListNode } from './linkedList';


class Swap {

  /**
   * 1721. Swapping Nodes in a Linked List
   * @param head
   * @param k
   */

  kthNodes(head: ListNode, k: number): ListNode | null {
    let slow = head;
    let fast = head;


    for (let i = 1; i < k; i++) {
      fast = fast.next;
    }

    let beginning = fast;
    while (fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
    let end = slow;

    const _ = beginning.value;
    beginning.value = end.value;
    end.value = _;
    return head;
  }

  /**
   * 24. Swap Nodes in Pairs
   * @param head
   */
  pairs (head: ListNode | null): ListNode | null {
    if (!head) { return null; }
    if (head.next === null) { return head; }

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
}

export default Swap;