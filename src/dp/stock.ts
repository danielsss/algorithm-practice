import {Comparator} from '../utils';


/**
 * Classical Stock Questions for dynamic programming
 */
class Stock extends Comparator {

  /**
   * 121. Best Time to Buy and Sell Stock
   * @param prices
   */
  public maxProfit(prices: number[]): number {
    // To set min variable as Max value at beginning
    let min = Number.MAX_VALUE;
    let max = 0;

    for (let i = 0; this.lessThan(i, prices.length); i++) {
      // Looking for min value and keep min value update-to-up
      if (this.lessThan(prices[i], min)) {
        min = prices[i];
      } else if (
        // Update max value if prices[i] - min (it will calculate out the max profit value) > max
        this.greaterThan(prices[i] - min, max)
      ) {
        max = prices[i] - min;
      }
    }

    return max;
  }

  public maxProfitDP(prices: number[]): number {

    return 0;
  }

}

export default Stock;