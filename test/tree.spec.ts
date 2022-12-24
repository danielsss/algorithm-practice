import { describe, it } from 'mocha';
import { expect } from 'chai';
import { createBinaryTree } from '../src/tree/binaryTree';
import Algorithms from '../src/tree/algorithms';


describe('- Tree Algorithm Test', function () {
  const tree = new Algorithms();
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
});