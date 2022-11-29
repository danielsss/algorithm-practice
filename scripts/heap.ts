import MinHeap from '../src/heap/minHeap';
import MaxHeap from '../src/heap/maxHeap';

const minHeap = new MinHeap<number>();
minHeap.add(10).add(20).add(1).add(3).add(4).add(9).add(100);
console.info(minHeap.toString());
console.info(minHeap.poll());

const maxHeap = new MaxHeap<number>();
maxHeap.add(10).add(20).add(1).add(3).add(4).add(9).add(100);
console.info(maxHeap.toString());
console.info(maxHeap.poll());
