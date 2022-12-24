export class TreeNode<T> {

  private _value:  T;
  private _left:   TreeNode<T>;
  private _right:  TreeNode<T>;

  constructor(value: T = null) {
    this._left = null;
    this._right = null;
    this.setValue(value);
  }


  /**
   * Set both of left and right node
   * @param leftValue
   * @param rightValue
   */
  setBoth(leftValue, rightValue) {
    this._left = new TreeNode<T>(leftValue);
    this._right = new TreeNode<T>(rightValue);
    return this;
  }

  /**
   * Returns node's value
   */
  getValue(): T {
    return this._value;
  }

  /**
   * Sets value to node
   * @param value
   */
  setValue(value: T) {
    this._value = value;
  }

  /**
   * Return left node
   */
  getLeft(): TreeNode<T> {
    return this._left;
  }

  /**
   * Sets left node
   * @param value
   */
  setLeft(value: T) {
    this._left = new TreeNode<T>(value);
    return this._left;
  }

  /**
   * Return right node
   */
  getRight(): TreeNode<T> {
    return this._right;
  }

  /**
   * Sets right node
   * @param value
   */
  setRight(value: T) {
    this._right = new TreeNode<T>(value);
    return this._right;
  }

  swap(left, right) {
    this._left = right;
    this._right = left;
  }

  /**
   * If append node to current node, if left node doesn't exist, sets left node,
   * otherwise sets right node, if both nodes are set doesn't anything
   * @param value
   */
  append(value: T) {
    if (this.getLeft() === null) {
      this.setLeft(value);
    } else if (this.getRight() === null) {
      this.setRight(value);
    }
  }

}