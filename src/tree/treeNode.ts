export class TreeNode<T> {
  private _value:  T;
  private _left:   TreeNode<T>;
  private _right:  TreeNode<T>;

  constructor(value: T = null) {
    this._left = null;
    this._right = null;
    this.setValue(value);
  }

  public set left(node: TreeNode<T>) {
    this._left = node;
  }

  public set right(node: TreeNode<T>) {
    this._right = node;
  }

  public get left() {
    return this._left;
  }

  public get right() {
    return this._right;
  }

  public get value() {
    return this._value;
  }

  public get val() {
    return this._value;
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
}