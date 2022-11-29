import { Comparator } from '../utils';

class Heap<T> extends Comparator {

  protected container: T[];

  constructor() {
    if (new.target === Heap) {
      throw new TypeError('Cannot construct Heap instance directly');
    }
    super();
    this.container = [];
  }

  parent(childIndex: number) {
    return this.container[this.getParent(childIndex)];
  }

  leftChild(parentIndex: number) {
    return this.container[this.getLeftChildIndex(parentIndex)];
  }

  rightChild(parentIndex: number) {
    return this.container[this.getRightChildIndex(parentIndex)];
  }

  getLeftChildIndex(parentIndex: number) {
    return parentIndex * 2 + 1;
  }

  getRightChildIndex(parentIndex: number) {
    return parentIndex * 2 + 2;
  }

  hasLeftChild(parentIndex: number) {
    return this.container.length > this.getLeftChildIndex(parentIndex);
  }

  hasRightChild(parentIndex: number) {
    return this.container.length > this.getRightChildIndex(parentIndex);
  }



  hasParent(childIndex: number) {
    return this.getParent(childIndex) >= 0;
  }

  getParent(childIndex: number) {
    return Math.floor((childIndex - 1) / 2);
  }


  /**
   * @return { boolean }
   */
  isEmpty() {
    return !this.container.length;
  }

  /**
   * @return {string}
   */
  toString() {
    return this.container.toString();
  }

  add(value: T): Heap<T> {
    this.container.push(value);
    this.swim();
    return this;
  }

  swim(childIndex?: number): Heap<T> {
    let cur = childIndex || this.container.length - 1;
    while (this.hasParent(cur) && !this.compare(
        this.parent(cur),
        this.container[cur])
      ) {
      this.swap(cur, this.getParent(cur));
      cur = this.getParent(cur);
    }
    return this;
  }

  sink(parentIndex = 0) {
    let currentIndex = parentIndex;
    let next = null;
    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex) &&
        /**
         * Max heap: right >= left ?
         */
        this.compare(this.rightChild(currentIndex), this.leftChild(currentIndex))
      ) {
        next = this.getRightChildIndex(currentIndex);
      } else {
        next = this.getLeftChildIndex(currentIndex);
      }

      if (this.compare(this.container[currentIndex], this.container[next])) {
        break;
      }

      this.swap(currentIndex, next);
      currentIndex = next;
    }
  }

  poll(): T {
    if (this.isEmpty()) {
      return null;
    }
    if (this.container.length === 1) {
      return this.container.pop();
    }

    const item = this.container[0];
    // !!!IMPORTANT: It will rebuild the construct of binary heap
    this.container[0] = this.container.pop();
    this.sink(0);
    return item;
  }

  peek(): T | null {
    if (this.container.length === 0) {
      return null;
    }

    return this.container[0];
  }

  compare(first: T, second: T): boolean {
    throw new Error('You must have to implement the compare(first, second) method');
  }

  swap(cur: number, next: number): Heap<T> {
    const _ = this.container[cur];
    this.container[cur] = this.container[next];
    this.container[next] = _;
    return this;
  }
}

export default Heap;