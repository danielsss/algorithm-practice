import { Comparator } from '../utils';


class Robber extends Comparator {

  /**
   * 198. House Robber
   * You are a professional robber planning to rob houses along a street.
   * Each house has a certain amount of money stashed, the only constraint
   * stopping you from robbing each of them is that adjacent houses have
   * security systems connected, and it will automatically contact the police
   * if two adjacent houses were broken into on the same night.
   *
   * Given an integer array nums representing the amount of money of each house,
   * return the maximum amount of money you can rob tonight without alerting the police.
   * @param nums
   */
  public house(nums: number[]): number {
    const len = nums.length;
    if (this.equal(len, 0)) return 0;
    if (this.equal(len, 1)) return nums[0];
    if (this.equal(len, 2)) return Math.max(nums[0], nums[1]);

    let i = 2;
    while (i < len) {
      nums[i] = Math.max(nums[i] + nums[i - 2], nums[1]);
      nums[i - 1] = Math.max(nums[i - 1], nums[i - 2]);
      i++;
    }

    return Math.max(nums[len - 1], nums[len - 2]);
  }


  public houseII() {}
  public houseIII() {}

}

export default Robber;