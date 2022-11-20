import BiTreeNode from './BiTreeNode';


const createMaximumBinaryTree = function(nums: number[]): BiTreeNode {
  if (nums.length <= 0) {
    return null;
  }

  const max = Math.max(...nums);
  const index = nums.findIndex((v) => v === max);

  console.info('max: %d and index: %d', max, index);
  const root = new BiTreeNode(nums[index]);
  const left = nums.slice(0, index);
  if (left && left.length > 0) {
    root.left = createMaximumBinaryTree(left);
  }

  const right = nums.slice(index + 1, nums.length);
  if (right && right.length > 0) {
    root.right = createMaximumBinaryTree(right);
  }
  return root;
}

const treeInstance = createMaximumBinaryTree([3,2,1,6,0,5]);

const r = [];
const pre = function(ins: BiTreeNode) {

  if (!ins) {
    return null;
  }

  r.push(ins.value);
  pre(ins.left);
  pre(ins.right);
}
pre(treeInstance);
console.info(r);