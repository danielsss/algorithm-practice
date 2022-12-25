import { TreeNode } from './treeNode';
import { Timer } from '../ioc/timer';
import { Comparator } from '../utils';

class Algorithms extends Comparator  {

  @Timer('test()')
  public test() {
    for (let i = 0; i < 100; i++) {
      //
    }

    return 0;
  }

  /**
   * 104. Maximum Depth of Binary Tree
   * @param root
   */
  //@Timer('maxDepth()')
  public maxDepth(root: TreeNode<number>): number {
    if (this.equal(root, null)) return 0;

    let leftMax = this.maxDepth(root.getLeft());
    let rightMax = this.maxDepth(root.getRight());

    return Math.max(leftMax, rightMax) + 1;
  }


  /**
   * 144. Binary Tree Preorder Traversal
   * @param root
   */
  public preOrder(root: TreeNode<number>) {
    let res = [];
    const traverse = (root: TreeNode<number>) => {
      if (this.equal(root, null)) return [];
      res.push(root.getValue());
      traverse(root.getLeft());
      traverse(root.getRight());
    }
    traverse(root);
    return res;
  }

  /**
   * 94. Binary Tree Inorder Traversal
   * @param root
   */
  public inOrder(root: TreeNode<number>) {
    let res = [];
    const traverse = (root: TreeNode<number>) => {
      if (this.equal(root, null)) return [];
      traverse(root.getLeft());
      res.push(root.getValue());
      traverse(root.getRight());
    }
    traverse(root);
    return res;
  }

  /**
   * 145. Binary Tree Postorder Traversal
   * @param root
   */
  public postOrder(root: TreeNode<number>) {
    let res = [];
    const traverse = (root: TreeNode<number>) => {
      if (this.equal(root, null)) return [];
      traverse(root.getLeft());
      traverse(root.getRight());
      res.push(root.getValue());
    }
    traverse(root);
    return res;
  }

  /**
   * 102. Binary Tree Level Order Traversal
   * TIPS: FIFO
   * @param root
   */
  public levelOrder(root: TreeNode<number>) {
    if (!root) return [];

    let queue = [ root ];
    let res = [];
    while(this.greaterThan(queue.length, 0)) {
      let node = queue.pop();
      res.push(node.getValue());
      if (node.getLeft()) queue.unshift(node.getLeft());
      if (node.getRight()) queue.unshift(node.getRight());
    }

    return res;
  }

  /**
   * 112. Path Sum
   * @param root
   * @param target
   */
  public hasSumPath(root: TreeNode<number>, target: number): boolean {
    if (!root) { return false; }
    if (
      this.equal(root.getLeft(), root.getRight()) &&
      this.equal(root.getValue(), target)
    ) { return true; }
    return this.hasSumPath(root.getLeft(), target - root.getValue()) ||
      this.hasSumPath(root.getRight(), target - root.getValue());
  }

  /**
   * 226. Invert Binary Tree
   * @param root
   */
  public invert(root: TreeNode<number>): TreeNode<number> {
    const traverse = (root: TreeNode<number>) => {
      if (this.equal(root, null)) { return; }
      root.swap(root.getLeft(), root.getRight());
      traverse(root.getLeft());
      traverse(root.getRight());
    }
    traverse(root);
    return root;
  }


  /**
   * 700. Search in a Binary Search Tree
   * @param root
   * @param target
   */
  public searchInBST(root: TreeNode<number>, target: number): TreeNode<number> {
    if (this.equal(root, null)) return null;

    if (root.getValue() > target) {
      return this.searchInBST(root.getLeft(), target);
    }
    if (root.getValue() < target) {
      return this.searchInBST(root.getRight(), target);
    }

    return root;
  }

  /**
   * 701. Insert into a Binary Search Tree
   * @param root
   * @param val
   */
  public insertBST(root: TreeNode<number>, val: number): TreeNode<number> {
    if (this.equal(root, null)) {
      return new TreeNode<number>(val);
    }

    if (this.greaterThan(root.value, val)) {
      root.left = this.insertBST(root.getLeft(), val);
    }
    if (this.lessThan(root.value, val)) {
      root.right = this.insertBST(root.getRight(), val);
    }

    return root;
  }
}


export default Algorithms;