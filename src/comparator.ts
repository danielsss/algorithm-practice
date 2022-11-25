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

export default Comparator;