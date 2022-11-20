import { Comparator } from '../utils';


interface Materials {
  disOrdered: number[],
  ordered: number[]
}


class Sort extends Comparator {

  private temp: number[];

  constructor() {
    super();
    this.temp = [];
  }

  public static materials: Materials[] = [
    {
      disOrdered: [10, 29, 11, 1, 3, 5, 90, 101, 8, -1, 22, 45],
      ordered   : [-1, 1, 3, 5, 8, 10, 11, 22, 29, 45, 90, 101]
    },
    {
      disOrdered: [11, 21, 1],
      ordered:    [1, 11, 21]
    },
    {
      disOrdered: [],
      ordered:    []
    },
    {
      disOrdered: [11],
      ordered:    [11]
    }
  ];


  mergeSort(nums: number[]) {
    if (nums.length <= 1) {
      return nums;
    }

    // split array into two halves
    let middle = Math.floor(nums.length / 2);
    let left = nums.slice(0, middle);
    let right = nums.slice(middle, nums.length);

    let leftSortedArray = this.mergeSort(left);
    let rightSortedArray = this.mergeSort(right);
    return this.mergeTwoSortedArray(leftSortedArray, rightSortedArray);
  }

  private mergeTwoSortedArray(left: number[], right: number[]): number[] {

    this.temp = [];
    let li = 0;
    let ri = 0;

    while (this.lessThan(li, left.length) && this.lessThan(ri, right.length)) {
      if (this.lessThanOrEqual(left[li], right[ri])) {
        this.temp.push(left[li]);
        li++;
      } else {
        this.temp.push(right[ri]);
        ri++;
      }
    }

    return this.temp.concat(left.slice(li)).concat(right.slice(ri));
  }


  /**
   * It's just like the pre-ordered reverse of binary tree
   *
   * Time complexity is O(log(n))
   *
   * @param nums
   */
  quickSort(nums: number[]) {
    if (nums.length <= 1) {
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
      if (value === pivot) { center.push(value) }
      else if (value < pivot) { left.push(value) }
      else { right.push(value) }
    }

    // Recursive calling
    const leftSortedArray = this.quickSort(left);
    const rightSortedArray = this.quickSort(right);

    return leftSortedArray.concat(center, rightSortedArray);
  }

  bubbleSort(nums: number[]): number[] {
    if (nums.length <= 1) return nums;

    const array = [ ... nums ];

    for (let i = 1; i < array.length; i++) {

      for (let j = 0; j < array.length - i; j++) {

        // [ 6, 5, 1, 3, 2, 9, 7 ]
        // array[j = 0] -> 6
        // array[j + 1 = 1] -> 5
        if (array[j] > array[j + 1]) {

          // swap values
          [ array[j], array[j + 1] ] = [ array[j + 1], array[j] ];
        }

      }

    }

    return array;

  }
}


export default Sort;