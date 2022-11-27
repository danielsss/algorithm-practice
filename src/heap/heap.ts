import { Comparator } from '../utils';

class Heap<T> extends Comparator {

  protected container: T[];

  constructor() {
    super();
    this.container = [];
  }


  /**
   * Get index of parent
   * @param childIndex
   */
  parent(childIndex: number) {
    return this.container[this.getParent(childIndex)];
  }

  hasParent(childIndex: number) {
    return this.getParent(childIndex) >= 0;
  }

  getParent(childIndex: number) {
    return Math.floor((childIndex - 1) / 2);
  }

  /**
   * Get index of left child
   * @param i
   */
  left(i: number) {
    return i * 2;
  }


  /**
   * Get index of right child
   * @param i
   */
  right(i: number) {
    return i * 2 + 1;
  }


  /**
   * @return {boolean}
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

  add(value: T) {
    this.container.push(value);
    this.swim();
    return this;
  }

  swim(index?: number) {
    let cur = index || this.container.length - 1;
    while (this.hasParent(cur) && !this.isOrderCorrect(this.parent(cur), this.container[cur])) {
      this.swap(cur, this.getParent(cur));
      cur = this.getParent(cur);
    }
  }

  sink() {}


  isOrderCorrect(first, second): boolean {
    throw new Error('You must have to implement the isOrderCorrect(first, second) method');
  }

  swap(cur: number, next: number) {
    const _ = this.container[cur];
    this.container[cur] = this.container[next];
    this.container[next] = _;
  }
}

export default Heap;