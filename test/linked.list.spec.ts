import { describe, it } from 'mocha';
import { concrete, generateLinkedList, ListNode, traverse, traverseRecursively } from '../src/linked.list/linkedList';
import { expect } from 'chai';
import { swapPairs } from '../src/linked.list/swapPairs';
import { partition } from '../src/linked.list/partition';
import { middleNode } from '../src/linked.list/middleNode';
import { getIntersectionNode, getIntersectionNodeVersion2 } from '../src/linked.list/intersection';
import { mergeTwoLists } from '../src/linked.list/mergeTwoSortedList';
import { removeDuplicate } from '../src/linked.list/removeDuplicate';
import { reverse } from '../src/linked.list/reverse';

describe('- Linked List Algorithms Unit Test', function() {

  it('# Basic tool GenerateLinkedList()', done => {
    const originalArray = [1, 2, 3, 4, 5];
    const linkedList = generateLinkedList(originalArray);
    expect(linkedList instanceof ListNode).to.be.true;
    const arr = traverse<number>(linkedList);
    expect(originalArray).is.deep.eq(arr);
    done();
  });


  it('# Swap Pairs', done => {
    expect(
      traverse<number>(swapPairs(generateLinkedList([1, 3, 4, 2, 5, 9])))
    ).to.have.members([3, 1, 2, 4, 9, 5]);
    expect(
      traverse<number>(swapPairs(generateLinkedList([1])))
    ).to.have.members([1]);
    expect(swapPairs(null)).to.eq(null);
    expect(
      traverse<number>(swapPairs(generateLinkedList([2, 3, 4])))
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

  it('# Merge Two Lists', done => {
    const l1 = generateLinkedList([1, 2, 3, 3, 4, 5, 8]);
    const l2 = generateLinkedList([2, 4, 6, 7, 8]);
    const v = traverse<number>(mergeTwoLists(l1, l2));
    expect(v).to.have.members([1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8]);
    done(null);
  });

  it('# Remove Duplicates', done => {
    const l = removeDuplicate(generateLinkedList([0, 0, 1, 2, 2, 3, 4, 4]));
    expect(traverse<number>(l)).to.have.members([0, 1, 2, 3, 4]);
    done(null);
  });


  it('# Traverse Recursively', done => {
    const orig = [1, 2, 3, 4, 5];
    const head = generateLinkedList(orig);
    expect(traverseRecursively(head)).to.have.ordered.members(orig);
    done(null);
  });

  it('# Reverse ', done => {
    const orig = [1, 2, 3, 4, 5];
    const head = generateLinkedList(orig);
    expect(reverse(head)).to.have.ordered.members(orig.reverse());
    done(null);
  });
});