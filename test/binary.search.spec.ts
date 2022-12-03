import { describe, it } from 'mocha';
import { expect } from 'chai';
import BinarySearch from '../src/binary.search';
import Material from '../src/array/material';


describe('- Binary Search Unit Test', function () {

  it('# 704. Binary Search', done => {
    const bs = new BinarySearch();
    const material = Material.cases[0];
    const index = bs.searchIndex(material.ordered, material.target[0]);
    expect(index).to.eq(material.target[1]);
    done(null);
  });

  it('# 374. Guess Number Higher or Lower', done => {
    const bs = new BinarySearch();
    expect(bs.guessNumber(10, 6)).to.eq(6);
    done(null);
  });

  it('# 852. Peak Index in a Mountain Array', done => {
    const bs = new BinarySearch();
    expect(bs.peakIndexInMountainArray([0, 1, 0])).to.eq(1);
    expect(bs.peakIndexInMountainArray([0, 10, 2, 0])).to.eq(1);
    expect(bs.peakIndexInMountainArray([0, 1, 20, 6, 5, 2])).to.eq(2);
    done(null);
  });


  it('# 35. Search Insert Position', done => {
    const bs = new BinarySearch();
    expect(bs.searchInsertPosition([1,3,5,6], 2)).to.eq(1);
    expect(bs.searchInsertPosition([1,3,5,6], 5)).to.eq(2);
    done(null);
  });

  it('# 367. Valid Perfect Square', done => {
    const bs = new BinarySearch();
    expect(bs.isPerfectSquare(16)).to.be.true;
    expect(bs.isPerfectSquare(13)).to.be.false;
    expect(bs.isPerfectSquare(14)).to.be.false;
    expect(bs.isPerfectSquare(15)).to.be.false;
    expect(bs.isPerfectSquare(25)).to.be.true;
    done(null);
  });

  it('# 744. Find Smallest Letter Greater Than Target', done => {
    const bs = new BinarySearch();
    expect(bs.nextGreatestLetter(['c', 'f', 'g'], 'c')).to.eq('f');
    expect(bs.nextGreatestLetter(['c', 'f', 'g'], 'a')).to.eq('c');
    expect(bs.nextGreatestLetter(["x","x","y","y"], 'z')).to.eq('x');
    done(null);
  })

  it('# 34. Find First and Last Position of Element in Sorted Array', done => {
    const bs = new BinarySearch();
    expect(bs.searchRange([1,2,5,7,7,   8,8,8,   10], 8)).to.have.ordered.members([5, 7]);
    expect(bs.searchRange([5,7,7,8,8,10], 6)).to.have.ordered.members([-1, -1]);
    expect(bs.searchRange([3, 3, 3], 3)).to.have.ordered.members([0, 2]);
    expect(bs.searchRange([1], 1)).to.have.ordered.members([0, 0]);
    expect(bs.searchRange([], 0)).to.have.ordered.members([-1, -1]);
    done(null);
  });

});
