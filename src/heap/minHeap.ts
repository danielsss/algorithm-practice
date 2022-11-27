import Heap from './heap';


class MinHeap extends Heap<number> {

  constructor() {
    super();
  }

  isOrderCorrect(first, second): boolean {
    return this.lessThanOrEqual(first, second);
  }
}

export default MinHeap;