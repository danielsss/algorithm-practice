import { describe, it } from 'mocha';
import { expect } from 'chai';
import { BinaryTree } from '../src/tree/binaryTree';
import CoinChange from '../src/dp/coinChange';
import Stairs from '../src/dp/stairs';
import Fibonacci  from '../src/dp/fibonacci';
import DynamicProgramming from '../src/dp';
import Robber from '../src/dp/robber';

describe('- Dynamic Programming Algorithms Unit Test', function() {

  it('# 746. Min Cost Climbing Stairs', done => {
    const stairs = new Stairs();
    expect(stairs.minCostClimbingV1([10, 15, 20])).to.eq(15);
    expect(stairs.minCostClimbingV1([1,100,1,1,1,100,1,1,100,1])).to.eq(6);

    expect(stairs.minCostClimbingV2([10, 15, 20])).to.eq(15);
    expect(stairs.minCostClimbingV2([1,100,1,1,1,100,1,1,100,1])).to.eq(6);
    done(null);
  });

  it('# 509. Fibonacci Number', done => {
    const fibonacci = new Fibonacci();
    expect(fibonacci.iteration(0)).to.eq(0);
    expect(fibonacci.iteration(1)).to.eq(1);
    expect(fibonacci.iteration(2)).to.eq(1);
    expect(fibonacci.iteration(3)).to.eq(2);
    expect(fibonacci.iteration(4)).to.eq(3);


    expect(fibonacci.recursive(0)).to.eq(0);
    expect(fibonacci.recursive(1)).to.eq(1);
    expect(fibonacci.recursive(2)).to.eq(1);
    expect(fibonacci.recursive(3)).to.eq(2);
    expect(fibonacci.recursive(4)).to.eq(3);

    done(null);
  });

  it('# 322. Coin Change', done => {
    const coinChange = new CoinChange();
    expect(coinChange.recursive([1,2,5], 11)).to.eq(3);
    coinChange.clean();
    expect(coinChange.recursive([2], 3)).to.eq(-1);
    coinChange.clean();
    expect(coinChange.recursive([1], 0)).to.eq(0);
    coinChange.clean();

    expect(coinChange.iteration([1, 2, 5], 11)).to.eq(3);
    done(null);
  });

  it('# 53. Maximum Subarray', done => {
    const dp = new DynamicProgramming();
    expect(dp.maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).to.eq(6);
    expect(dp.maxSubArray([-2, 1])).to.eq(1);
    expect(dp.maxSubArray([1])).to.eq(1);
    expect(dp.maxSubArray([5,4,-1,7,8])).to.eq(23);
    expect(dp.maxSubArray([])).to.eq(0);
    done(null);
  });


  it('# 198. House Robber', done => {
    const rob = new Robber();
    expect(rob.house([2, 1, 1, 2])).to.eq(4);
    expect(rob.house([1])).to.eq(1);
    expect(rob.house([])).to.eq(0);
    expect(rob.house([1, 2, 3, 1])).to.eq(4);
    expect(rob.house([2, 4, 5, 6, 8, -1])).to.eq(15);
    done(null);
  });

  it('# 213. House Robber II', done => {
    const rob = new Robber();
    expect(rob.houseInCircle([2, 1, 1, 2])).to.eq(2 + 1);
    expect(rob.houseInCircle([2,3,2])).to.eq(3);
    expect(rob.house([1,2,3,1])).to.eq(1 + 3);
    done(null);
  });

  it('# 337. House Robber III', done => {
    const rob = new Robber();
    const tree = new BinaryTree(3);
    tree.getRoot().setLeft(2).setRight(3);
    tree.getRoot().setRight(3).setRight(1);
    expect(rob.houseInTree(tree.getRoot())).to.eq(7);
    done(null);
  });

  it('# 1143. Longest Common Subsequence', done => {
    const dp = new DynamicProgramming();
    expect(dp.longCommonSubsequence('abcde', 'ace')).to.eq(3);
    expect(dp.longCommonSubsequence('abcd', 'ace')).to.eq(2);
    done(null);
  });
});