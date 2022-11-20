import { ListNode } from './linkedList';

export function reverse(head: ListNode, container: number[] = []) {
  if (!head.next) {
    return container.push(head.value);
  }

  reverse(head.next, container);
  container.push(head.value);
  return container;
}