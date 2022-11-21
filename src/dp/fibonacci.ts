import { Comparator } from '../utils';

class Fibonacci extends Comparator {

  /**
   * The Fibonacci numbers, commonly denoted F(n) form a sequence,
   * called the Fibonacci sequence, such that each number is the sum of the two preceding ones,
   * starting from 0 and 1.
   * @param { Number } n
   */
  iteration(n: number){
    if (this.equal(n, 0)) {
      return 0;
    }

    let pre = 0;
    let cur = 1;

    for (let i = 2; this.lessThanOrEqual(i, n); i++) {
      let sum = pre + cur;
      pre = cur;
      cur = sum;
    }

    return cur;
  }

  recursive(n: number) {
    if (this.lessThan(n, 2)) {
      return n;
    }

    return this.recursive(n - 1) + this.recursive(n - 2);
  }

}

export default Fibonacci;