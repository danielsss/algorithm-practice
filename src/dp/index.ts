import {Comparator} from '../utils';


class DynamicProgramming extends Comparator {


  public maxSubArray(nums: number[]): number {
    if (nums.length === 0) {
      return 0;
    }

    let dp0 = nums[0];
    let dp1 = 0; let res = dp0;
    for (let i = 1; i < nums.length; i++) {
      dp1 = Math.max(nums[i], nums[i] + dp0);
      dp0 = dp1;
      res = Math.max(res, dp1);
    }

    return res;
  }

}


export default DynamicProgramming;