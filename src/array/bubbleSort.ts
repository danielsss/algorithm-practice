import { Comparator } from '../utils';

class BubbleSort extends Comparator {

  constructor() {
    super();
  }

  public iteration(nums: number[]): number[] {
    if (nums.length <= 1) return nums;

    const array = [ ... nums ];

    for (let i = 1; i < array.length; i++) {
      for (let j = 0; j < array.length - i; j++) {
        if (array[j] > array[j + 1]) {
          // swap values
          [ array[j], array[j + 1] ] = [ array[j + 1], array[j] ];
        }
      }

    }

    return array;
  }
}


export default BubbleSort;