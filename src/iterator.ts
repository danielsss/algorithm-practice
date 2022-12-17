/**
 * The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.
 */
class Iterable {

  /**
   * Making your objects are iterable
   *
   * @param { Record } orig
   */
  public static wrap(orig: Record<any, any>) {
    const keys = Object.keys(orig || {});
    const length = keys.length;
    if (length <= 0) {
      return {
        [Symbol.iterator]() {
          return {
            next() {
              return { key: undefined, value: undefined, done: true };
            }
          }
        }
      };
    }

    return {
      [Symbol.iterator]() {
        let i = 0;
        return {
          next() {
            if (i < length) {
              return { value: [keys[i], orig[keys[i++]]], done: false };
            }
            return {  value: [keys[i], orig[keys[i]]], done: true };
          }
        }
      }
    }
  }
}

export default Iterable;