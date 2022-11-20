import {Comparator} from '../utils';


class Stairs extends Comparator {

  minCostClimbingStairs(cost: number[]): number {
    let dp = Array(cost.length + 1).fill(0);

    for (let i = 2; i <= cost.length; i++) {
      dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }

    return dp[cost.length];
  };

  minCostClimbingStairsV2(cost: number[]): number {
    const dp = [0, 0];

    for (let i = 2; i <= cost.length; i++) {
      let s = Math.min(dp[1] + cost[i - 1], dp[0] + cost[i - 2]);
      dp[0] = dp[1];
      dp[1] = s;
    }

    return dp[1];
  }

}

export default Stairs;