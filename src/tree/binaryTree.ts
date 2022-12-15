import { BinaryTreeNode } from './binaryTreeNode';

export class BinaryTree<T> {

  private readonly _root: BinaryTreeNode<T>;

  constructor(value: T) {
    this._root = new BinaryTreeNode(value);
  }

  /**
   * Returns 'root' node
   */
  getRoot(): BinaryTreeNode<T> {
    return this._root;
  }

  /**
   * Returns node with a given value
   * @param value
   * @param node
   */
  findNode(value: T, node: BinaryTreeNode<T> = null): BinaryTreeNode<T> {

    if (this._root === null) {
      return null;
    }

    if (node === null) {
      node = this.getRoot();
    }

    let result: BinaryTreeNode<T> = null;

    if (node.getValue() === value) {
      result = node;
    }

    if (result === null && node.getLeft() !== null) {
      result = this.findNode(value, node.getLeft());
    }

    if (result === null && node.getRight() !== null) {
      result = this.findNode(value, node.getRight());
    }

    return result;

  }

  displayEveryNodeLevel(root: BinaryTreeNode<T>, level: number) {
    if (root === null) return 0;

    console.info('Node: %d at level: %d', root.getValue(), level);
    this.displayEveryNodeLevel(root.getLeft(), level + 1);
    this.displayEveryNodeLevel(root.getRight(), level + 1);
  }

  hasNodes(root: BinaryTreeNode<T>) {
    if (root === null) return 0;

    let leftCount = this.hasNodes(root.getLeft());
    let rightCount = this.hasNodes(root.getRight());

    console.info('节点 %s 的左子树有 %d 个节点，右子树有 %d 个节点',
      root.getValue(), leftCount, rightCount);
    return leftCount + rightCount + 1;
  }

}


/**
 * Creating a binary tree and it looks like below:<br>
 * <br>
 * -                        (1)<br>
 * -                      /     \<br>
 * -                    (2)       (5)<br>
 * -                  /    \      /<br>
 * -                (3)    (4)  (6)<br>
 * -                            /<br>
 * -                          (9)<br>
 */
export const createBinaryTree = function() {

  const binaryTree = new BinaryTree<number>(1);
  binaryTree.getRoot().setLeft(2);
  binaryTree.findNode(2).setLeft(3);
  binaryTree.findNode(2).setRight(4);
  binaryTree.getRoot().setRight(5);
  binaryTree.findNode(5).setLeft(6);
  binaryTree.findNode(5).setRight(9);
  binaryTree.findNode(6).setLeft(7);

  return binaryTree.getRoot();
}