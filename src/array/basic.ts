

class Basic {

  mergeTwoSortedArrays(n1: number[], n2: number[]): number[] {
    let arr = [];
    let i = 0, j = 0;
    while(i < n1.length || j < n2.length) {
      if (i === 0 && j === n2.length) {
        arr = arr.concat(n1);
        break;
      }

      if (j === 0 && i === n1.length) {
        arr = arr.concat(n2);
        break;
      }

      if (n1[i] < n2[j]) {
        arr.push(n1[i++]);
        continue;
      }
      arr.push(n2[j++]);
    }

    return arr;
  }

  median(nums1: number[], nums2: number[]): number {
    let n1 = nums1.length;
    let n2 = nums2.length;
    const merged = this.mergeTwoSortedArrays(nums1, nums2);
    if ((n1 + n2) % 2) {
      return merged[Math.floor((n1 + n2) / 2)]
    } else {
      let right = (n1 + n2) / 2;
      let left =  right - 1;
      return (merged[left] + merged[right]) / 2;
    }
  }
}

export default Basic;