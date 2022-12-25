import { Comparator } from '../../utils';
import { TreeNode } from '../treeNode';
class BinarySearchTree extends Comparator {


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

  /**
   * 1. Check if node value is falling in the range or not.
   *
   * 2. Explanation
   *
   *    if(node value is in the range [low, high]) {<br>
   *       - then recrusively check for the left subtree & assign result to root.left<br>
   *       - recursively check for right subtree & assign result to root.right<br>
   *    } else if(node value is less than low) {<br>
   *       - No need to check for left subtree because anyways<br>
   *       - those values in the left subtree are going to be less than the root.<br>
   *       - Assign whatever you got from right subtree to the root(and NOT to root.right)<br>
   *    } else if(node value is greater than right){<br>
   *       - No need to check for right subtree<br>
   *       - & assign whatever you got from leeft subtree to the root(and NOT to root.left)<br>
   *       - because the root itself is out of range, so only it's child nodes MAY fall in the<br>
   *       - range.<br>
   *    }<br>
   *
   * @param root
   * @param L
   * @param R
   */
  public trim(root, L, R) {
    if (root == null) {
      return null;
    }
    //if the range is correct then checking both root left and right
    if (root.val >= L && root.val <= R) {
      root.left = this.trim(root.left, L, R);//Trim the left subtree
      root.right = this.trim(root.right, L, R);//Trim the right subtree
    } else if (root.val < L) {
      //if the root val is less than low then getting values from left will be even lower(binary tree rule) so we need to set the root to root.right;
      root = this.trim(root.right, L, R);
    } else if (root.val > R) {
      //if the root val is greater than high then getting values from right will be even higher(binary tree rule) so we need to the root to root.left.
      root = this.trim(root.left, L, R);
    }
    return root;
  }
}

export default BinarySearchTree;