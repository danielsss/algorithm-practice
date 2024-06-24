import { BTreeNode } from './treeNode';

class BTree {

  protected root: BTreeNode;

  constructor(protected minimum_degree: number) {
    if (typeof minimum_degree !== 'number' || minimum_degree <= 0) {
      throw new Error('Minimum degree is required and it can not be less than 1');
    }

    this.minimum_degree = minimum_degree;
    this.root = null;
  }


  public insert(key: number) {
    if (this.root === null) {
      this.root = new BTreeNode({ minimum_degree: this.minimum_degree, leaf: true });
      this.root.keys[0] = key; // insert key
      this.root.counter = 1;
    } else {
      if (this.root.counter === 2 * this.minimum_degree - 1) {
        const s = new BTreeNode({ minimum_degree: this.minimum_degree, leaf: false });
        s.children[0] = this.root;
        s.splitChild(0, this.root);
        let i = 0;
        if (s.keys[0] < key) {
          i++;
        }
        s.children[i].insertNonFull(key);
        this.root = s;
      } else {
        this.root.insertNonFull(key);
      }
    }
  }
}


const t = new BTree(2);
t.insert(10);
t.insert(20);
t.insert(5);
t.insert(6);
t.insert(12);
t.insert(30);
t.insert(7);
t.insert(17);


console.info(t);
