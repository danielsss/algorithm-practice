import { ListNode } from '../linkedList/linkedList';
import LinkedListMinHeap from '../heap/linkedListMinHeap';


class MergeKList {

  do(lists: ListNode[]) {
    if (lists.length <= 0) return null;

    const dummy = new ListNode(-1);
    let p = dummy;

    const pq = new LinkedListMinHeap();
    for (let i = 0; i < lists.length; i++) {
      pq.add(lists[i]);
    }

    while(!pq.isEmpty()) {
      let node = pq.poll();
      p.next = node;

      if (node.next !== null) {
        pq.add(node.next);
      }
      p = p.next;
    }

    return dummy.next;
  }
}


export default MergeKList;