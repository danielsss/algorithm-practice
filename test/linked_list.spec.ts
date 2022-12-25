import { describe, it } from 'mocha';
import { concrete, generateLinkedList, ListNode, traverse } from '../src/linkedList/linkedList';
import { expect } from 'chai';
import { partition } from '../src/linkedList/partition';
import { middleNode } from '../src/linkedList/middleNode';
import { getIntersectionNode, getIntersectionNodeVersion2 } from '../src/linkedList/intersection';
import { removeDuplicate } from '../src/linkedList/removeDuplicate';

import LinkedList from '../src/linkedList';
import Swap from '../src/linkedList/swap';

describe('- Linked List Tree Unit Test', function() {

  it('# FindMedian tool GenerateLinkedList()', done => {
    const originalArray = [1, 2, 3, 4, 5];
    const linkedList = generateLinkedList(originalArray);
    expect(linkedList instanceof ListNode).to.be.true;
    const arr = traverse<number>(linkedList);
    expect(originalArray).is.deep.eq(arr);
    done();
  });


  it('# Swap k th Nodes', done => {
    const swap = new Swap();
    let swapped = swap.kthNodes(generateLinkedList([1,2,3,4,5]), 2);
    expect(traverse<number>(swapped)).to.have.ordered.members([1,4,3,2,5]);

    swapped = swap.kthNodes(generateLinkedList([7,9,6,6,7,8,3,0,9,5]), 5);
    expect(traverse<number>(swapped)).to.have.ordered.members([7,9,6,6,8,7,3,0,9,5]);
    done(null);
  });


  it('# Swap Pairs', done => {
    const swap = new Swap();
    expect(
      traverse<number>(swap.pairs(generateLinkedList([1, 3, 4, 2, 5, 9])))
    ).to.have.members([3, 1, 2, 4, 9, 5]);
    expect(
      traverse<number>(swap.pairs(generateLinkedList([1])))
    ).to.have.members([1]);
    expect(swap.pairs(null)).to.eq(null);
    expect(
      traverse<number>(swap.pairs(generateLinkedList([2, 3, 4])))
    ).to.have.members([3, 2, 4]);


    done(null);
  });

  it('# Partition', done => {
    partition(generateLinkedList([1,4,3,2,5,2]), 3);
    done(null);
  });

  it('# Middle Node', done => {
    const originalValues = [1,2,3,4,5];
    const arr = traverse<number>(middleNode(generateLinkedList(originalValues)));
    const divided = originalValues.length / 2;
    expect(arr).to.have.members(originalValues.slice(Math.floor(divided)));

    originalValues.push(6);
    const arr2 = traverse<number>(middleNode(generateLinkedList(originalValues)));
    const divided2 = originalValues.length / 2;
    expect(arr2).to.have.members(originalValues.slice(Math.floor(divided2)));
    done(null);
  });

  it('# Intersection Node', done => {
    const l1 = generateLinkedList(['a1', 'a2', 'a3', 'a4', 'a5']);
    const l2 = generateLinkedList(['b1', 'b2', 'b3']);
    const l3 = generateLinkedList(['c1', 'c2']);

    const n1 = concrete(l1, l3);
    const n2 = concrete(l2, l3);

    const intersected = getIntersectionNode(n1, n2);
    expect(intersected.value).to.eq(l3.value);

    expect(getIntersectionNodeVersion2(n1, n2).value).to.eq(l3.value);
    done(null);
  });

  it('# 21. Merge Two Sorted Lists', done => {
    const algorithm = new LinkedList();
    const l1 = generateLinkedList([1, 2, 3, 3, 4, 5, 8]);
    const l2 = generateLinkedList([2, 4, 6, 7, 8]);
    const v = traverse<number>(algorithm.mergeTwoLists(l1, l2));
    expect(v).to.have.members([1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8]);
    done(null);
  });

  it('# Remove Duplicates', done => {
    const l = removeDuplicate(generateLinkedList([0, 0, 1, 2, 2, 3, 4, 4]));
    expect(traverse<number>(l)).to.have.members([0, 1, 2, 3, 4]);
    done(null);
  });


  it('# 206. Reverse Linked List recursively', done => {
    const algorithm = new LinkedList();
    const orig = [1, 2, 3, 4, 5];
    const head = generateLinkedList(orig);
    expect(traverse<number>(algorithm.reverse(head))).to.have.ordered.members(orig.reverse());
    done(null);
  });

  it('# 141. Linked List Cycle', done => {
    const algorithm = new LinkedList();
    const ls = generateLinkedList([3,2,0,-4], true);
    expect(algorithm.hasCircle(ls)).to.be.true;
    done(null);
  });
});