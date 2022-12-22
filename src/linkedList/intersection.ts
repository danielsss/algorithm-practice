import { ListNode, count } from './linkedList';

/**
 * Given the heads of two singly linked-lists headA and headB,
 * return the node at which the two lists intersect.
 * If the two linked lists have no intersection at all, return null.
 *
 * Time complexity is O(n)
 *
 * @param headA
 * @param headB
 */
export function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let p1 = headA;
  let p2 = headB;

  while(p1 !== p2) {
    if (p1 === null) {
      p1 = headB;
    } else {
      p1 = p1.next;
    }

    if (p2 === null) {
      p2 = headA;
    } else {
      p2 = p2.next;
    }
  }

  return p1;

}

export function getIntersectionNodeVersion2(headA: ListNode, headB: ListNode): ListNode | null {
  let lenA = count(headA);
  let lenB = count(headB);

  let p1 = headA;
  let p2 = headB;

  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i++) {
      p1 = p1.next;
    }
  } else {
    for (let i = 0; i < lenB - lenA; i++) {
      p2 = p2.next;
    }
  }

  while(p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
}