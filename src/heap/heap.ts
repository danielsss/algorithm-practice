import { Comparator } from '../utils';

class Heap extends Comparator {

  /**
   * Get index of parent
   * @param i
   */
  public parent(i: number) {
    return i / 2;
  }

  /**
   * Get index of left child
   * @param i
   */
  public left(i: number) {
    return i * 2;
  }


  /**
   * Get index of right child
   * @param i
   */
  public right(i: number) {
    return i * 2 + 1;
  }
}

export default Heap;