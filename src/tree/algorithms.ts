import { BinaryTreeNode } from './binaryTreeNode';
import { Timer } from '../ioc/timer';

class Algorithms {

  @Timer('test()')
  public test() {
    for (let i = 0; i < 1000000; i++) {
      //
    }

    return 0;
  }


  //@Timer('maxDepth()')
  public maxDepth(root: BinaryTreeNode<number>): number {
    if (root === null) return 0;

    let leftMax = this.maxDepth(root.getLeft());
    let rightMax = this.maxDepth(root.getRight());

    return Math.max(leftMax, rightMax) + 1;
  }

}


export default Algorithms;