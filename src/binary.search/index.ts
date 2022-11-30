import { Comparator } from '../utils';

class BinarySearchAssistance extends Comparator {
  static IS_LESS_THAN = 1;
  static IS_EQUAL = 0;
  static IS_GREATER_THAN = -1;

  constructor(protected guessNumber: number = 0) {
    super();
    this.guessNumber = guessNumber;
  }

  guess(n: number) {

    if (this.equal(n, this.guessNumber)) {
      return BinarySearchAssistance.IS_EQUAL;
    }

    if (this.greaterThan(n, this.guessNumber)) {
      return BinarySearchAssistance.IS_GREATER_THAN;
    }

    return BinarySearchAssistance.IS_LESS_THAN;
  }

}


class BinarySearch extends Comparator {
  /**
   * 704. Binary Search
   * @param nums
   * @param target
   */
  searchIndex(nums: number[], target: number) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (this.equal(nums[mid], target)) {
        return mid;
      } else if (this.lessThan(nums[mid], target)) {
        left = mid + 1;
      } else if (this.greaterThan(nums[mid], target)) {
        right = mid - 1;
      }
    }

    return -1;
  }

  guessNumber(n: number, guessNumber: number): number {
    let low = 0;
    let high = n;
    let pivot = Math.floor(low + (high - low) / 2);
    const assistance = new BinarySearchAssistance(guessNumber);

    while (this.isNotEqual(assistance.guess(pivot), BinarySearchAssistance.IS_EQUAL)) {
      if (this.equal(assistance.guess(pivot), BinarySearchAssistance.IS_LESS_THAN)) {
        low = pivot + 1;
      } else if (this.equal(assistance.guess(pivot), BinarySearchAssistance.IS_GREATER_THAN)) {
        high = pivot - 1;
      }

      pivot = Math.floor(low + (high - low) / 2);
    }

    return pivot;
  }
}

export default BinarySearch;