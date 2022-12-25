import Tree from '../src/tree/algos/tree';
import { createBinaryTree } from '../src/tree/binaryTree';

const run = new Tree();

const depth = run.maxDepth(createBinaryTree());
console.info('the max depth is %d', depth);

run.test();