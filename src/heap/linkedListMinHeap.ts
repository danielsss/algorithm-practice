import Heap from './heap';
import { ListNode } from '../linkedList/linkedList';


class LinkedListMinHeap extends Heap<ListNode> {

  constructor() {
    super();
  }

  compare(first: ListNode, second: ListNode): boolean {
    return this.lessThanOrEqual(first.value, second.value);
  }
}

export default LinkedListMinHeap;