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


interface BTreeOptions {
  minimum_degree: number;
  leaf: boolean;
}


export class BTreeNode {
  public minimum_degree: number;
  public keys: Array<number | null>;
  public children: Array<BTreeNode | null>;
  public counter: number;
  public leaf: boolean;

  constructor(protected options: BTreeOptions = {} as BTreeOptions) {
    if (!options || Object.keys(options || {}).length <= 0) {
      throw new Error('BTreeNode: options are required');
    }
    this.minimum_degree = this.options.minimum_degree;
    this.keys = new Array(2 * this.minimum_degree - 1).fill(null);
    this.children = new Array(2 * this.minimum_degree).fill(null);
    this.counter = 0;
    this.leaf = this.options.leaf;
  }


  /**
   * @description A utility function to insert a new key in the subtree rooted with this node.
   * The assumption is that the node must be non-full when this function is called
   * @param key
   */
  public insertNonFull(key: number) {
    let i = this.counter - 1;

    if (this.leaf) {
      while (i >= 0 && this.keys[i] > key) {
        this.keys[i + 1] = this.keys[i];
        i--;
      }
      this.keys[i + 1] = key;
      this.counter++;
    } else {
      while (i >= 0 && this.keys[i] > key) {
        i--;
      }

      if (this.children[i + 1].counter === 2 * this.minimum_degree - 1) {
        this.splitChild(i + 1, this.children[i + 1]);
        if (this.keys[i + 1] < key) {
          i++;
        }
      }
      this.children[i + 1].insertNonFull(key);
    }
  }


  public splitChild(i: number, y: BTreeNode) {
    const z = new BTreeNode({ minimum_degree: y.minimum_degree, leaf: y.leaf });
    z.counter = this.minimum_degree - 1;
    for (let j = 0; j < this.minimum_degree - 1; j++) {
      z.keys[j] = y.keys[j + this.minimum_degree];
    }
    if (!y.leaf) {
      for (let j = 0; j < this.minimum_degree; j++) {
        z.children[j] = y.children[j + this.minimum_degree];
      }
    }
    y.counter = this.minimum_degree - 1;
    for (let j = this.counter; j > i; j--) {
      this.children[j + 1] = this.children[j];
    }
    this.children[i + 1] = z;
    for (let j = this.counter - 1; j >= i; j--) {
      this.keys[j + 1] = this.keys[j];
    }
    this.keys[i] = y.keys[this.minimum_degree - 1];
    this.counter++;
  }
}
