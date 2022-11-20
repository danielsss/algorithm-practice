import { Comparator } from '../utils';
// import {After} from '../ioc/after';


class CoinChange extends Comparator {

  protected memo: number[] = [];
  private initialized: boolean = false;

  constructor() {
    super();
  }

  clean() {
    this.initialized = false;
    this.memo = [];
    return this;
  }

  initialize(amount: number) {
    if (this.initialized) {
      return this;
    }

    if (this.memo.length === 0) {
      this.memo = Array(amount + 1).fill(-2);
    }
    this.initialized = true;
  }

  // @After('clean')
  dp(coins: number[], amount: number): number {
    if (amount === 0 ) { return 0; }
    if (amount < 0) { return -1; }

    this.initialize(amount);
    if (this.isNotEqual(this.memo[amount], -2)) {
      return this.memo[amount];
    }

    let res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < coins.length; i++) {
      const sp = this.dp(coins, amount - coins[i]);
      if (this.equal(sp, -1)) {
        continue;
      }
      res = Math.min(res, sp + 1);
    }

    this.memo[amount] = this.equal(res, Number.MAX_SAFE_INTEGER) ? -1 : res;
    return this.memo[amount];
  }

  v2(coins: number[], amount: number) {
    if (amount === 0) { return 0; }


    let memo = Array(amount + 1).fill(amount + 1);

    memo[0] = 0;
    for (let i = 0; i < memo.length; i++) {

      for (let j = 0; j < coins.length; j++) {
        if (i - coins[j] < 0) {
          continue;
        }

        console.info('memo 下标 %d - (coins[%d]: %d) = %d', i, j, coins[j], memo[i - coins[j]] + 1);
        console.info('当目标金额 i = %d 时， 至少需要 %d 枚金币可以凑出', i, memo[i - coins[j]] + 1);


        memo[i] = Math.min(memo[i], memo[i - coins[j]] + 1);
      }


      console.info(memo);
    }

    return memo[amount] == amount + 1 ? -1 : memo[amount]
  }
}

export default CoinChange;