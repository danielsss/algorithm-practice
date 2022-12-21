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
   * 1608. Special Array With X Elements Greater Than or Equal X
   * @param nums
   */
  public specialSearch(nums: number[]): number {
    let low = 0;
    let high = nums.length;

    while (this.lessThan(low, high)) {
      let mid = this.pivot(low, high);
      const count = evaluate(mid);
      if (this.equal(count, mid)) {
        return mid;
      }
      if (this.lessThan(count, mid)) {
        high = mid;
      }
      if (this.greaterThan(count, mid)) {
        low = mid + 1;
      }
    }

    function evaluate(min: number) {
      return nums.reduce((accumulate, cur) => {
        if (cur >= min) return accumulate + 1;
        return accumulate;
      }, 0);
    }

    return evaluate(low) === low ? low : -1;
  }

  /**
   * 704. Binary Search
   * @param nums
   * @param target
   */
  public searchIndex(nums: number[], target: number) {
    let left = 0;
    let right = nums.length - 1;

    while(this.lessThanOrEqual(left, right)) {
      let mid = this.pivot(left, right);
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

  /**
   * 374. Guess Number Higher or Lower
   * @param n
   * @param guessNumber
   */
  public  guessNumber(n: number, guessNumber: number): number {
    let low = 0;
    let high = n;
    let pivot = this.pivot(low, high);
    const assistance = new BinarySearchAssistance(guessNumber);

    while (this.isNotEqual(assistance.guess(pivot), BinarySearchAssistance.IS_EQUAL)) {
      if (this.equal(assistance.guess(pivot), BinarySearchAssistance.IS_LESS_THAN)) {
        low = pivot + 1;
      } else if (this.equal(assistance.guess(pivot), BinarySearchAssistance.IS_GREATER_THAN)) {
        high = pivot - 1;
      }

      pivot = this.pivot(low, high);
    }

    return pivot;
  }

  /**
   * 852. Peak Index in a Mountain Array
   * @param arr
   */
  public peakIndexInMountainArray(arr: number[]) {
    if (this.isZero(arr.length)) return -1;

    let low = 0;
    let high = arr.length;

    while (this.lessThan(low, high)) {
      let mid = this.pivot(low, high);

      if (this.greaterThanOrEqual(arr[mid], arr[mid + 1])) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }

    return low;
  }

  /**
   * 35. Search Insert Position
   *
   * Given a sorted array of distinct integers and a target value,
   * return the index if the target is found. If not,
   * return the index where it would be if it were inserted in order.
   *
   * You must write an algorithm with O(log n) runtime complexity.
   *
   * Example: nums = [1,3,5,6], target = 5, 2
   * @param arr
   * @param target
   */
  public searchInsertPosition(arr: number[], target: number) {
    let low = 0;
    let high = arr.length;

    let mid = this.pivot(low, high);

    while(this.lessThan(low, high)) {
      if (this.equal(arr[mid], target)) {
        return mid;
      } else if (this.lessThan(arr[mid], target)) {
        low = mid + 1;
      } else if (this.greaterThan(arr[mid],  target)) {
        high = mid;
      }
      mid = this.pivot(low, high);
    }

    return mid;
  }

  /**
   * 367. Valid Perfect Square
   * @param num
   */
  public isPerfectSquare(num: number): boolean {
    let low = 0;
    let high = num;
    let mid = this.pivot(low, high);

    while (this.lessThan(low, high)) {
      if (mid * mid === num) {
        return true;
      }
      if (mid * mid > num) {
        high = mid;
      } else if (mid * mid < num) {
        low = mid + 1;
      }

      mid = this.pivot(low, high);
    }

    return false;
  }

  /**
   * 744. Find Smallest Letter Greater Than Target
   * @param letters
   * @param target
   */
  public nextGreatestLetter(letters: string[], target: string): string {
    let low = 0;
    let high = letters.length;
    while (this.lessThan(low, high)) {
      let mid = this.pivot(low, high);
      if (letters[mid] > target) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }

    return letters[low] > target ? letters[low]: letters[0];
  };


  /**
   * 34. Find First and Last Position of Element in Sorted Array
   * @param nums
   * @param target
   *
   *
   * [1,2,5,7,7,   8,8,8,   10]
   */
  public searchRange(nums: number[], target: number): number[] {
    const left = () => {
      let low = 0;
      let high = nums.length;

      while(this.lessThan(low, high)) {
        let mid = this.pivot(low, high);
        if (nums[mid] === target) {
          if (mid === 0 || nums[mid - 1] !== target) return mid;
        }

        if (nums[mid] === target && nums[mid - 1] === target) {
          high = mid;
        } else if (nums[mid] > target) {
          high = mid;
        } else if (nums[mid] < target) {
          low = mid + 1;
        }
      }

      return -1;
    }

    const right = () => {
      let low = 0;
      let high = nums.length;

      while(this.lessThan(low, high)) {
        let mid = this.pivot(low, high);
        if (nums[mid] === target) {
          if (mid === nums.length - 1 || nums[mid + 1] !== target) {
            return mid;
          }
        }

        if (nums[mid] === target && nums[mid + 1] === target) {
          low = mid + 1;
        } else if (nums[mid] > target) {
          high = mid;
        } else if (nums[mid] < target) {
          low = mid + 1;
        }
      }

      return -1;
    }


    return [ left(), right() ];
  }

  /**
   * 1351. Count Negative Numbers in a Sorted Matrix
   */
  public countNegatives(grid: number[][]): number {
    let row = grid.length;
    let col = grid[0].length;

    let i = 0;
    let j = col - 1;
    let count = 0;
    while (j >= 0 && i < row) {

      if (this.lessThan(grid[i][j], 0)) {
        count++;
        if (this.equal(j, 0)) {
          j = col - 1;
          i++;
        } else {
          j--;
        }
      } else if (this.equal(j, 0)) {
        i++;
        j = col - 1;
      } else {
        j--;
      }

    }

    return count;
  }

  /**
   * 153. Find Minimum in Rotated Sorted Array
   * @param nums
   */
  public findMinFromRotatedArray(nums: number[]): number {
    let low = 0;
    let high = nums.length;
    if (this.equal(nums.length, 1)) {
      return nums[0];
    }

    if (this.lessThan(nums[low], nums[high - 1])) {
      return nums[low];
    }
    while (this.lessThan(low, high)) {
      let mid = this.pivot(low, high);
      if (nums[mid] > nums[mid + 1]) {
        return nums[mid + 1];
      }
      if (nums[mid] < nums[mid - 1]) {
        return nums[mid];
      }

      if (nums[mid] > nums[0]) {
        // We should search the minimum value towards right ig mid > the first element
        low = mid + 1;
      } else {
        // Otherwise, we should search minimum value towards left
        high = mid;
      }
    }
  }

  /**
   * 633. Sum of Square Numbers
   * @param c
   */
  public judgeSquareSum(c: number): boolean {
    let low = 0;
    let high = Math.floor(Math.sqrt(c));

    while (this.lessThanOrEqual(low, high)) {
      let sum = (low * low) + (high * high);
      if (this.equal(sum, c)){
        return true;
      }

      if (this.lessThan(sum, c)) low++;
      if (this.greaterThan(sum, c)) high--;
    }

    return false;
  };

  /**
   * 74. Search a 2D Matrix
   * @param matrix
   * @param target
   */
  public searchMatrix(matrix: number[][], target: number): boolean {
    let row = matrix.length;
    let col = matrix[0].length;
    let i = 0;
    let j = col - 1;
    while (this.lessThan(i, row) && this.greaterThanOrEqual(j,0)) {
      if (this.equal(matrix[i][j], target)) {
        return true;
      }
      if (this.lessThan(matrix[i][j], target)) {
        i++;
      } else {
        j--;
      }
    }

    return false;
  };


  /**
   * 1855. Maximum Distance Between a Pair of Values
   * @param nums1
   * @param nums2
   */
  public maxDistance(nums1: number[], nums2: number[]): number {
    let ans = 0; let i = 0; let j = 0;

    while(this.lessThan(i, nums1.length) && this.lessThan(j, nums2.length)) {
      if (this.lessThanOrEqual(nums1[i], nums2[j])) {
        ans = Math.max(ans, j - i);
        j++;
      } else {
        i++;
      }
    }

    return ans;
  }

  protected pivot(low: number, high: number) {
    if (isNaN(low) || isNaN(high)) {
      throw new Error('low and high must be numbers');
    }
    return Math.floor(low + (high - low) / 2);
  }
}

export default BinarySearch;