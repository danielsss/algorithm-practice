
class Repetition {

  /**
   * Why the time complexity is O(N^2) ?
   *
   * It's involved the immigration of data if doing manipulations on the parameter directly
   *
   * @param arr
   */
  v1(arr: number[]): number[] {
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]){
        arr.splice(i + 1, 1);
        // i-- that will be -1 if there is a duplication at the beginning,
        // but It's all right because the i++ will be executed next step
        i--;
      }
    }

    return arr;
  }

  v2(arr: number[]): number[] {
    let slow = 0;
    let fast = 0;
    while (fast < arr.length) {
      if (arr[slow] !== arr[fast]) {
        slow++;
        arr[slow] = arr[fast];
      }

      fast++;
    }
    return arr.splice(0, slow + 1);
  }
}

export default Repetition;