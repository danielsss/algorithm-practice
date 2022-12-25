import { describe, it } from 'mocha';
import { expect } from 'chai';
import { createBinaryTree, createBinarySearchTree } from '../src/tree/binaryTree';
import Algorithms from '../src/tree/algorithms';


describe('- Tree Algorithm Test', function () {
  const tree = new Algorithms();

  const bst = createBinarySearchTree();
  /**
   * bst looks like below
   * <br>
   * -                        (4)<br>
   * -                      /    \<br>
   * -                    (2)     (7)<br>
   * -                  /    \  <br>
   * -                (1)    (3)<br>
   */

  const bt = createBinaryTree();
  // root -> left -> right
  const preOrder = [1,2,3,4,5,6,7,9];
  // left -> root -> right
  const inOrder = [3,2,4,1,6,5,7,9];
  // left -> right -> root
  const postOrder = [3,4,2,6,9,7,5,1];

  const lo = [1,2,5,3,4,6,7,9];
  it('# 104. Maximum Depth of Binary Tree', done => {
    expect(tree.maxDepth(bt)).to.eq(4);
    done(null);
  });

  it('# 144. Binary Tree Preorder Traversal', done => {
    expect(tree.preOrder(bt)).to.have.ordered.members(preOrder);
    done(null);
  });

  it('# 94. Binary Tree Inorder Traversal', done => {
    expect(tree.inOrder(bt)).to.have.ordered.members(inOrder);
    done(null);
  });

  it('# 145. Binary Tree Postorder Traversal', done => {
    expect(tree.postOrder(bt)).to.have.ordered.members(postOrder);
    done(null);
  });

  it('# 102. Binary Tree Level Order Traversal', done => {
    expect(tree.levelOrder(bt)).to.have.ordered.members(lo);
    done(null);
  });

  it('# 112. Path Sum', done => {
    expect(tree.hasSumPath(bt, 22)).to.be.true;
    expect(tree.hasSumPath(bt, 23)).to.be.false;
    done(null);
  });

  it('# 226. Invert Binary Tree', done => {
    const inverted = tree.invert(bt);
    const res = tree.levelOrder(inverted);
    expect(res).to.have.ordered.members([1,5,2,7,6,4,3,9]);
    done(null);
  });

  it('# 700. Search in a Binary Search Tree', done => {
    expect(tree.searchInBST(bst.getRoot(), 2)).to.eq(bst.getRoot().getLeft());
    done(null);
  });

  it('# 701. Insert into a Binary Search Tree', done => {
    // The "5" will be extended following the element of "7"
    const extended = tree.insertBST(bst.getRoot(), 5);
    expect(tree.hasSumPath(extended, 16/* 4 + 7 + 5 = 16 */)).to.be.true;
    done(null);
  });
});