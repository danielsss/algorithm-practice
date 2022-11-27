import Heap from './heap';


class MaxHeap extends Heap<number> {

  constructor() {
    super();
  }

  isOrderCorrect(first, second): boolean {
    return this.greaterThanOrEqual(first, second);
  }
}

export default MaxHeap;