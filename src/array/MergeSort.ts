// import * as chalk from 'chalk';


class MergeSort {
  private readonly temp;

  constructor() {
    this.temp = []
  }

  public recursive(nums: number[], low: number, high: number) {
    if (low === high) {
      return;
    }

    let mid = Math.floor((high + low) / 2);
    this.recursive(nums, low, mid);
    this.recursive(nums, mid + 1, high);
    this.merge(nums, low, mid, high);
  }

  private merge(nums: number[], low: number,  mid: number, high: number) {
    for (let i = low; i <= high; i++) {
      this.temp[i] = nums[i];
    }

    // 数组双指针技巧，合并两个有序数组
    let i = low;
    let j = mid + 1;
    for (let p = low; p <= high; p++) {
      if (i == mid + 1) {
        // 左半边数组已全部被合并
        nums[p] = this.temp[j++];
      } else if (j == high + 1) {
        // 右半边数组已全部被合并
        nums[p] = this.temp[i++];
      } else if (this.temp[i] > this.temp[j]) {
        nums[p] = this.temp[j++];
      } else {
        nums[p] = this.temp[i++];
      }
    }
  }
}


// const temp = [];
// const sort = function(nums: number[], left: number, right: number) {
//   if (left === right) {
//     //console.info('<Reached conditions>');
//     return;
//   }
//
//
//   let mid = Math.floor((right + left) / 2);
//
//   // console.info(`${chalk.green('<Push stack>PRE_ORDER => left: %d, mid: %d, right: %d')}`, left, mid, right);
//   sort(nums, left, mid);
//
//   // console.info('IN_ORDER => left: %d, mid: %d + 1 = %d, right: %d', left, mid, mid + 1, right);
//
//   sort(nums, mid + 1, right);
//   // console.info(`${chalk.red('<Pull out stack>POST_ORDER => left: %d, mid: %d, right: %d')}`, left, mid, right);
//
//   for (let i = left; i <= right; i++) {
//     temp[i] = nums[i];
//     // 1. [ 5, 3 ]
//   }
//
//   /**
//    * Input: [ 5, 3, 1, 2, 6, 0 ]
//    *
//    *
//    * [ 5, 3 ]
//    * [ 5, 3, 1 ]
//    * [ 5, 3, 1, 2, 6 ]
//    * [ 5, 3, 1, 2, 6, 0 ]
//    * [ 5, 3, 1, 2, 6, 0 ]
//    */
//   let i = left, j = mid + 1;
//   for (let p = left; p <= right; p++) {
//     //console.info('i: %d, j: %d, p: %d, right: %d', i, j, p, right);
//     if (i == mid + 1) {
//       // 左半边数组已全部被合并
//       nums[p] = temp[j++];
//     } else if (j == right + 1) {
//       // 右半边数组已全部被合并
//       nums[p] = temp[i++];
//     } else if (temp[i] > temp[j]) {
//       nums[p] = temp[j++];
//     } else {
//       nums[p] = temp[i++];
//     }
//   }
//
//   // console.info(chalk.bgBlue('MERGED ARRAY: %j'), nums);
// }

export default MergeSort;