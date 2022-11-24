import { Comparator } from '../utils';


class Intersection extends Comparator {

  /**
   * 349. Intersection of Two Arrays
   *
   * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
   */
  twoArrays(nums1: number[], nums2: number[]) {
    let _ = undefined;
    let len1 = nums1.length;
    let len2 = nums2.length;
    if (this.lessThan(len1, len2)) {
      _ = nums1;
      nums1 = nums2
      nums2 = _;
    }

    const collection = new Set<number>(nums1);
    const res = new Set<number>();
    for (let i = 0; i < len2; i++) {
      collection.has(nums2[i]) && res.add(nums2[i]);
    }

    return Array.from(res);
  }

}


export default Intersection;