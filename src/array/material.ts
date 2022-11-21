interface Materials {
  disOrdered: number[],
  ordered: number[]
}

class Material {

  public static cases: Materials[] = [
    {
      disOrdered: [10, 29, 11, 1, 3, 5, 90, 101, 8, -1, 22, 45],
      ordered   : [-1, 1, 3, 5, 8, 10, 11, 22, 29, 45, 90, 101]
    },
    {
      disOrdered: [11, 21, 1],
      ordered:    [1, 11, 21]
    },
    {
      disOrdered: [],
      ordered:    []
    },
    {
      disOrdered: [11],
      ordered:    [11]
    }
  ]

}

export default Material;