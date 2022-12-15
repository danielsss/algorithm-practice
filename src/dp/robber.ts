import { Comparator } from '../utils';
import { TreeNode } from '../tree/treeNode';


/**
 * Classical Stock Questions for dynamic programming
 */
class Robber extends Comparator {


  protected isBasicCase(len: number): boolean {
    return this.lessThanOrEqual(len, 2);
  }

  protected getMaxMoney(nums: number[]): number {
    if (this.equal(nums.length, 0)) return 0;
    if (this.equal(nums.length, 1)) return nums[0];
    if (this.equal(nums.length, 2)) return Math.max(nums[0], nums[1]);
  }
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
    if (this.isBasicCase(len)) {
      return this.getMaxMoney(nums);
    }

    let i = 2;
    while (i < len) {
      nums[i] = Math.max(nums[i] + nums[i - 2], nums[1]);
      nums[i - 1] = Math.max(nums[i - 1], nums[i - 2]);
      i++;
    }

    return Math.max(nums[len - 1], nums[len - 2]);
  }


  public houseInCircle(nums: number[]): number {
    const situation1 = this.house(nums.slice(0, nums.length - 1));
    const situation2 = this.house(nums.slice(1, nums.length));
    return Math.max(situation1, situation2);
  }

  /**
   * 337. House Robber III
   * @param root
   */
  public houseInTree(root: TreeNode<number>) {
    let s = factory(root);

    /**
     * Post traverse
     * @param root
     */
    function factory(root: TreeNode<number> | null) {
      if (root === null) {
        return [0, 0];
      }
      let left = factory(root.getLeft());
      let right = factory(root.getRight());
      let rob = root.getValue() + left[1] + right[1];
      let notRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
      return [rob, notRob];
    }

    return Math.max(s[0], s[1]);
  }
}

export default Robber;