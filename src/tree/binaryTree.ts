import { TreeNode } from './treeNode';

export class BinaryTree<T> {

  private readonly _root: TreeNode<T>;

  constructor(value: T) {
    this._root = new TreeNode(value);
  }

  /**
   * Returns 'root' node
   */
  getRoot(): TreeNode<T> {
    return this._root;
  }

  /**
   * Returns node with a given value
   * @param value
   * @param node
   */
  findNode(value: T, node: TreeNode<T> = null): TreeNode<T> {

    if (this._root === null) {
      return null;
    }

    if (node === null) {
      node = this.getRoot();
    }

    let result: TreeNode<T> = null;

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

  displayEveryNodeLevel(root: TreeNode<T>, level: number) {
    if (root === null) return 0;

    console.info('Node: %d at level: %d', root.getValue(), level);
    this.displayEveryNodeLevel(root.getLeft(), level + 1);
    this.displayEveryNodeLevel(root.getRight(), level + 1);
  }

  hasNodes(root: TreeNode<T>) {
    if (root === null) return 0;

    let leftCount = this.hasNodes(root.getLeft());
    let rightCount = this.hasNodes(root.getRight());

    console.info('节点 %s 的左子树有 %d 个节点，右子树有 %d 个节点',
      root.getValue(), leftCount, rightCount);
    return leftCount + rightCount + 1;
  }

}


/**
 * Creating a binary tree, and it looks like below:<br>
 * <br>
 * -                        (1)<br>
 * -                      /     \<br>
 * -                    (2)       (5)<br>
 * -                  /    \      /  \<br>
 * -                (3)    (4)  (6)   (7)<br>
 * -                                    \ <br>
 * -                                    (9)<br>
 */
export const createBinaryTree = function() {
  const binaryTree = new BinaryTree<number>(1);
  binaryTree.getRoot().setLeft(2);
  binaryTree.findNode(2).setLeft(3);
  binaryTree.findNode(2).setRight(4);
  binaryTree.getRoot().setRight(5);
  binaryTree.findNode(5).setLeft(6);
  binaryTree.findNode(5).setRight(7);
  binaryTree.findNode(7).setRight(9);
  return binaryTree.getRoot();
}


/**
 * Creating a binary search tree, and it looks like below:<br>
 * <br>
 * -                        (4)<br>
 * -                      /    \<br>
 * -                    (2)     (7)<br>
 * -                  /    \  <br>
 * -                (1)    (3)<br>
 */
export const createBinarySearchTree = function() {
  const bst = new BinaryTree(4);
  bst.getRoot().setLeft(2);
  bst.getRoot().setRight(7);
  bst.findNode(2).setRight(3);
  bst.findNode(2).setLeft(1);
  return bst;
}