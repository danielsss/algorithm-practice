import { describe, it } from 'mocha';
import { expect } from 'chai';
import { ArrayUtils } from '../src/utils';
import BubbleSort from '../src/array/bubbleSort';
import MergeSort from '../src/array/MergeSort';
import Material from '../src/array/material';
import QuickSort from '../src/array/quickSort';
import Repetition from '../src/array/repetition';


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
});