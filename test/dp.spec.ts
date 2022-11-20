import { describe, it } from 'mocha';
import { expect } from 'chai';
import CoinChange from '../src/dp/coin';
import Stairs from '../src/dp/stairs';
import { fibonacci } from '../src/dp/fibonacci';

describe('Dynamic Algorithms Unit Test', function() {

  it('.minCostClimbingStairs(cost: number[])', done => {
    const stairs = new Stairs();
    expect(stairs.minCostClimbingStairs([10, 15, 20])).to.eq(15);
    expect(stairs.minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])).to.eq(6);

    expect(stairs.minCostClimbingStairsV2([10, 15, 20])).to.eq(15);
    expect(stairs.minCostClimbingStairsV2([1,100,1,1,1,100,1,1,100,1])).to.eq(6);
    done(null);
  });

  it('.fibonacci(n: number)', done => {
    expect(fibonacci(0)).to.eq(0);
    expect(fibonacci(1)).to.eq(1);
    expect(fibonacci(2)).to.eq(1);
    expect(fibonacci(3)).to.eq(2);
    expect(fibonacci(4)).to.eq(3);
    done(null);
  });

  const coinChange = new CoinChange();
  it('.coinChange(coins: number[], amount: number)', done => {
    expect(coinChange.dp([1,2,5], 11)).to.eq(3);
    coinChange.clean();
    expect(coinChange.dp([2], 3)).to.eq(-1);
    coinChange.clean();
    expect(coinChange.dp([1], 0)).to.eq(0);
    coinChange.clean();

    coinChange.v2([1, 2, 5], 11);
    done(null);
  });
});