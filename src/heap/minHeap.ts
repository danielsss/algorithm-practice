import Heap from './heap';


class MinHeap<R> extends Heap<R> {

  constructor() {
    super();
  }

  compare(first: R, second: R): boolean {
    return this.lessThanOrEqual(first, second);
  }
}

export default MinHeap;