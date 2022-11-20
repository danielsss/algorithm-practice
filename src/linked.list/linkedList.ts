export class ListNode {
  public next: ListNode;

  constructor(public value: any) {
    this.value = value;
    this.next = null;
  }
}

export const count = function(head: ListNode): number {
  let count = 0;
  let p = head;
  while (p) {
    p = p.next
    count += 1;
  }

  return count;
}

export const concrete = function(head: ListNode, second: ListNode): ListNode {
  let p = head;
  while(p.next !== null) {
    p = p.next;
  }

  p.next = second;
  return head;
}

export const traverse = function<T>(head: ListNode): T[] {
  const r = [];
  for (let cur: ListNode = head; cur !== null; cur = cur.next) {
    r.push(cur.value);
  }
  return r as T[];
}

export const traverseRecursively = function (head: ListNode, container = []) {
  if (!head.next) {
    return container.push(head.value);
  }

  container.push(head.value);
  traverseRecursively(head.next, container);
  return container;
}

export const generateLinkedList = function(arr: unknown[]): ListNode | null {
  let head = null;
  if (!arr || arr.length <= 0) {
    return null;
  }

  let cursor = null;
  for (let i = 0; i < arr.length; i++) {
    if (head === null) {
      head = new ListNode(arr[i]);
      cursor = head;
      continue;
    }

    cursor.next = new ListNode(arr[i]);
    cursor = cursor.next;
  }

  return head;
}