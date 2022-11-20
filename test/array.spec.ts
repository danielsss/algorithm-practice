import { describe, it } from 'mocha';
import { removeDuplicate } from '../src/array/removeDuplicate';
import { expect } from 'chai';
import { ArrayUtils } from '../src/utils';
import Sort from '../src/array/sort';
import MergeSort from '../src/array/MergeSort';

describe('Array Algorithm Unit Test', function() {

  const method = new Sort();
  const utils = new ArrayUtils();
  it('.removeDuplicate(arr1: number[], arr2: number[])', done => {
    expect(removeDuplicate([0,0,1,1,1,2,2,3,3,4])).to.have.members([0, 1, 2, 3, 4]);
    expect(removeDuplicate([])).to.have.members([]);
    expect(removeDuplicate([0, 0])).to.have.members([0]);
    done(null);
  });

  it('.quickSort()', done => {
    for (const material of Sort.materials) {
      let sorted = method.quickSort(material.disOrdered);
      expect(sorted).to.have.ordered.members(material.ordered);
    }
    done(null);
  });


  it('.bubbleSort()', done => {
    expect(method.bubbleSort(Sort.materials[0].disOrdered)).to.have.ordered.members(Sort.materials[0].ordered);
    done(null);
  });


  it('.mergeSort()', function (done) {
    const mergeSort = new MergeSort();
    mergeSort.sort([2, 1, 3, 0, 7, 6], 0, [2, 1, 3, 0, 7, 6].length - 1);
    method.mergeSort([2, 1, 3, 0, 7]);
    const merged = method.mergeSort(Sort.materials[0].disOrdered);
    expect(merged).to.have.ordered.members(Sort.materials[0].ordered);
    // @ts-ignore
    this.timeout(1000 * 20);
    const sortedArray = utils.generate(100);
    const orderedMembers = [ ...sortedArray ];
    const reshuffled = utils.reshuffle(sortedArray);
    expect(method.mergeSort(reshuffled)).to.have.ordered.members(orderedMembers);
    done(null);
  });
});