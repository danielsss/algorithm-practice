import { Comparator } from '../utils';

class QuickSort extends Comparator {

  constructor() {
    super();
  }


  /**
   * It's just like the pre-ordered reverse of binary tree
   *
   * Time complexity is O(log(n))
   *
   * @param nums
   */
  recursive(nums: number[]) {
    if (this.lessThanOrEqual(nums.length, 1)) {
      return nums;
    }

    let copied = [...nums];
    // Pre-order here ?
    let left = [];
    let pivot = copied.shift();
    let center = [ pivot ];
    let right = [];

    while (copied.length) {
      const value = copied.shift();
      if (this.equal(value, pivot)) { center.push(value) }
      else if (this.lessThan(value, pivot)) { left.push(value) }
      else { right.push(value) }
    }

    // Recursive calling
    const leftSortedArray = this.recursive(left);
    const rightSortedArray = this.recursive(right);

    return leftSortedArray.concat(center, rightSortedArray);
  }
}


export default QuickSort;