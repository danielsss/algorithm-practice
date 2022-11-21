import { describe, it } from 'mocha';
import { expect } from 'chai';
import CoinChange from '../src/dp/coinChange';
import Stairs from '../src/dp/stairs';
import Fibonacci  from '../src/dp/fibonacci';

describe('- Dynamic Programming Algorithms Unit Test', function() {

  it('# Stairs climbing calculation', done => {
    const stairs = new Stairs();
    expect(stairs.minCostClimbingV1([10, 15, 20])).to.eq(15);
    expect(stairs.minCostClimbingV1([1,100,1,1,1,100,1,1,100,1])).to.eq(6);

    expect(stairs.minCostClimbingV2([10, 15, 20])).to.eq(15);
    expect(stairs.minCostClimbingV2([1,100,1,1,1,100,1,1,100,1])).to.eq(6);
    done(null);
  });

  it('# Fibonacci Sequence', done => {
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

  it('# Coin Change', done => {
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
});