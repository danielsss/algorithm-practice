import { describe, it } from 'mocha';
import { expect } from 'chai';
import { ArrayUtils } from '../src/utils';
import { generateLinkedList, traverse } from '../src/linked.list/linkedList';
import BubbleSort from '../src/array/bubbleSort';
import MergeSort from '../src/array/MergeSort';
import Material from '../src/array/material';
import QuickSort from '../src/array/quickSort';
import Repetition from '../src/array/repetition';
import Intersection from '../src/array/intersection';
import MergeKList from '../src/array/mergeKlist';
import Contain from '../src/array/contain';


describe('- Array Algorithms Unit Test', function() {

  const utils = new ArrayUtils();
  it('# Remove duplicates', done => {
    const repetition = new Repetition();
    expect(repetition.v1([0,0,1,1,1,2,2,3,3,4])).to.have.members([0, 1, 2, 3, 4]);
    expect(repetition.v1([])).to.have.members([]);
    expect(repetition.v1([0, 0])).to.have.members([0]);

    expect(repetition.v2([0,0,1,1,1,2,2,3,3,4])).to.have.members([0, 1, 2, 3, 4]);
    expect(repetition.v2([])).to.have.members([]);
    expect(repetition.v2([0, 0])).to.have.members([0]);
    done(null);
  });

  it('# QuickSort', done => {
    const quickSort = new QuickSort();
    for (const material of Material.cases) {
      const sorted = quickSort.recursive(material.disOrdered);
      expect(sorted).to.have.ordered.members(material.ordered);
    }
    done(null);
  });


  it('# BubbleSort', done => {
    const bubbleSort = new BubbleSort()
    expect(
      bubbleSort.iteration(Material.cases[0].disOrdered)
    ).to.have.ordered.members(Material.cases[0].ordered);
    done(null);
  });


  it('# MergeSort', function (done) {
    const mergeSort = new MergeSort();
    const sortedArray = utils.generate(100);
    const orderedMembers = [ ...sortedArray ];
    const reshuffled = utils.reshuffle(sortedArray);
    mergeSort.recursive(reshuffled, 0, reshuffled.length - 1);
    expect(reshuffled).to.have.ordered.members(orderedMembers);
    done(null);
  });


  it('# 349. Intersection of Two Arrays', done => {
    const intersection = new Intersection();
    expect(intersection.twoArrays([1,2,2,1], [2, 2]))
      .to.have.members([2]);

    expect(intersection.twoArrays([4,9,5], [9,4,9,8,4]))
      .to.have.members([9,4]);
    done(null);
  });

  it('# 23. Merge k Sorted Lists', done => {
    const k = new MergeKList();
    const lists = [
      generateLinkedList([1,4,5]),
      generateLinkedList([1,3,4]),
      generateLinkedList([2,6]),
    ];
    const ordered = [ 1, 1, 2, 3, 4, 4, 5, 6 ];
    const head = k.do(lists);
    expect(traverse<number>(head)).to.have.ordered.members(ordered);
    done(null);
  });

  it('# 217. Contains Duplicate', done => {
    const contain = new Contain();
    expect(contain.duplicatesV1([])).to.be.false;
    expect(contain.duplicatesV2([])).to.be.false;

    expect(contain.duplicatesV1([1,2,3,1])).to.be.true;
    expect(contain.duplicatesV2([1,2,3,1])).to.be.true;

    expect(contain.duplicatesV1([1,2,3,4])).to.be.false;
    expect(contain.duplicatesV2([1,2,3,4])).to.be.false;

    done(null);
  });
});