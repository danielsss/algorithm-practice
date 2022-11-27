import { describe, it } from 'mocha';
import { Iterable } from '../src/utils';
import { expect } from 'chai';

describe('- Utils Unit Test', function() {

  it('# Iterable', done => {
    const orig = {a: 1, b: 2, c: 3};
    const iterableObject = Iterable.wrap(orig);
    for (const [key, value] of iterableObject) {
      expect(orig.hasOwnProperty(key)).to.be.true;
      expect(orig[key]).to.eq(value);
    }
    done(null);
  });

});