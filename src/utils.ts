class ArrayUtils {

  public reshuffle(arr: number[]) {
    let i = 0;
    while(i < arr.length) {
      let a = Math.floor(Math.random() * arr.length);
      let b = Math.floor(Math.random() * arr.length);
      this.swap(arr, a, b);
      i++;
    }

    return arr;
  }

  public generate(from: number) {
    from = from || 1000;
    return Array.from<number>(Array(from).keys()).map(e => e + 1);
  }


  public swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
}

class Comparator {
  public defaultComparator(a, b) {
    if (a === b) {
      return 0
    }

    return a > b ? 1 : -1;
  }

  public lessThanOrEqual(a, b) {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  public greaterThanOrEqual(a, b) {
    return this.greaterThan(a, b) || this.equal(a, b);
  }

  public isNotEqual(a, b): boolean {
    return !this.equal(a, b);
  }

  public equal(a, b): boolean {
    return this.defaultComparator(a, b) === 0;
  }

  public greaterThan(a, b): boolean {
    return this.defaultComparator(a, b) === 1;
  }

  public lessThan(a, b) {
    return this.defaultComparator(a, b) === -1;
  }
}

export { Comparator, ArrayUtils };