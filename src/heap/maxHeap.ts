import Heap from './heap';


class MaxHeap<R> extends Heap<R> {

  constructor() {
    super();
  }

  compare(first: R, second: R): boolean {
    return this.greaterThanOrEqual(first, second);
  }
}

export default MaxHeap;