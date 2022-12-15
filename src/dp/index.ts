import {Comparator} from '../utils';


/**
 * Classical Questions for dynamic programming
 */
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

  /**
   * 1143. Longest Common Subsequence
   * @param text1
   * @param text2
   */
  public longCommonSubsequence(text1: string, text2: string): number {
    const n = text1.length;
    const m = text2.length;
    const arr = new Array(n + 1);
    const dp = arr.fill(undefined)
      .map(_ => new Array(m + 1).fill(0));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (text1[i] === text2[j]) {
          dp[i + 1][j + 1] = 1 + dp[i][j];
        } else {
          dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
        }
      }
    }

    return dp[n][m];
  }

}


export default DynamicProgramming;