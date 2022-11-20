
export function binarySearch(nums: number[], target: number) {

  let left = 0;
  let right = nums.length - 1;

  while(left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      console.info('found %d', mid);
      return mid;
    } else if (nums[mid] < target) {
      console.info('left[%d]', mid);
      left = mid + 1;
    } else if (nums[mid] > target) {
      console.info('right[%d]', mid);
      right = mid - 1;
    }
  }

  return -1;
}

console.info(binarySearch([-1,0,3,5,9,12], 5));