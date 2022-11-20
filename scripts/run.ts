import Algorithms from '../src/tree/algorithms';
import { createBinaryTree } from '../src/tree/binaryTree';

const run = new Algorithms();

const depth = run.maxDepth(createBinaryTree());
console.info('the max depth is %d', depth);

run.test();