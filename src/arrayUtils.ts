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
    const _ = arr[a];
    arr[a] = arr[b];
    arr[b] = _;
    return arr;
  }
}

export default ArrayUtils;