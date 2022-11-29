import MinHeap from '../src/heap/minHeap';
import MaxHeap from '../src/heap/maxHeap';

const minHeap = new MinHeap<number>();
minHeap.add(10).add(20).add(1).add(3).add(4).add(9).add(100);
console.info(minHeap.toString());
console.info('peek: %d', minHeap.peek());
console.info('poll: %d', minHeap.poll());

const maxHeap = new MaxHeap<number>();
maxHeap.add(10).add(20).add(1).add(3).add(4).add(9).add(100);
console.info(maxHeap.toString());
console.info('peek: %d', maxHeap.peek());
console.info('poll: %d', maxHeap.poll());
