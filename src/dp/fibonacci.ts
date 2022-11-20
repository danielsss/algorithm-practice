/**
 * The Fibonacci numbers, commonly denoted F(n) form a sequence,
 * called the Fibonacci sequence, such that each number is the sum of the two preceding ones,
 * starting from 0 and 1.
 * @param { Number } n
 */
export const fibonacci = function (n: number) {
  if (n === 0) {
    return 0;
  }

  let pre = 0;
  let cur = 1;

  for (let i = 2; i <= n; i++) {
    let sum = pre + cur;
    pre = cur;
    cur = sum;
  }

  return cur;
}