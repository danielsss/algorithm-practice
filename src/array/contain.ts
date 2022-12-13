import { Comparator } from '../utils';


class Contain extends Comparator {

  /**
   * 217. Contains Duplicate
   * @param nums
   */
  public duplicatesV1(nums: number[]) {
    if (nums.length <= 1) { return false; }

    let s = new Set(nums);
    return s.size !== nums.length;
  }

  /**
   * 217. Contains Duplicate
   * @param nums
   */
  public duplicatesV2(nums: number[]) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
      if (map.hasOwnProperty(nums[i])) {
        return true;
      }

      map[nums[i]] = null;
    }

    return false;
  }
}

export default Contain;