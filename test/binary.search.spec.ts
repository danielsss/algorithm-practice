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

});
