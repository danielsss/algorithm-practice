import {Comparator} from '../utils';


class Roman extends Comparator {

  /**
   * 13. Roman to Integer
   * @param s
   */
  toInt(s: string) {
    const map = {
      I: 1, V: 5, X: 10, L: 50, C: 100,
      D: 500, M: 1000
    };

    let pre = 0;
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
      let next = map[s.charAt(i)];
      sum = this.greaterThanOrEqual(pre, next) ? sum + next: sum + next - (pre * 2);

      pre = next;
    }

    return sum;
  }
}

export default Roman;