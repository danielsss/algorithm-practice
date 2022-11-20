/**
 * Pre-order traverse: root, left tree, right tree
 * Post-order traverse: left tree，right tree，root
 */
export default class BiTreeNode {
  public root: BiTreeNode;
  public left: BiTreeNode;
  public right: BiTreeNode;

  constructor(public value: unknown) {
    this.value = value;
  }
}