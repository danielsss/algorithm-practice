import { Comparator } from '../utils';
// import {After} from '../ioc/after';


class CoinChange extends Comparator {

  protected memo: number[] = [];
  private initialized: boolean = false;

  constructor() {
    super();
  }

  public clean() {
    this.initialized = false;
    this.memo = [];
    return this;
  }

  // @After('clean')
  public recursive(coins: number[], amount: number): number {
    if (amount === 0 ) { return 0; }
    if (amount < 0) { return -1; }

    this.initialize(amount);
    if (this.isNotEqual(this.memo[amount], -2)) {
      return this.memo[amount];
    }

    let res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < coins.length; i++) {
      const sp = this.recursive(coins, amount - coins[i]);
      if (this.equal(sp, -1)) {
        continue;
      }
      res = Math.min(res, sp + 1);
    }

    this.memo[amount] = this.equal(res, Number.MAX_SAFE_INTEGER) ? -1 : res;
    return this.memo[amount];
  }

  public iteration(coins: number[], amount: number) {
    if (amount === 0) { return 0; }
    let memo = Array(amount + 1).fill(amount + 1);

    memo[0] = 0;
    for (let i = 0; i < memo.length; i++) {
      for (let j = 0; j < coins.length; j++) {
        if (i - coins[j] < 0) {
          continue;
        }
        memo[i] = Math.min(memo[i], memo[i - coins[j]] + 1);
      }
    }

    return memo[amount] == amount + 1 ? -1 : memo[amount]
  }

  private initialize(amount: number) {
    if (this.initialized) {
      return this;
    }

    if (this.memo.length === 0) {
      this.memo = Array(amount + 1).fill(-2);
    }
    this.initialized = true;
  }
}

export default CoinChange;