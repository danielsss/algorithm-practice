import { describe, it } from 'mocha';
import { expect } from 'chai';
import StringAlgorithm from '../src/string';

describe('- String algorithms test case', function() {

  it('# 20. Valid Parentheses', done => {
    const sa = new StringAlgorithm();
    expect(sa.isValidParentheses('()[]{}')).to.be.true;
    // expect(sa.isValidParentheses('()')).to.be.true;
    // expect(sa.isValidParentheses('(]')).to.be.false;
    // expect(sa.isValidParentheses('[({})]')).to.be.true;
    done(null);
  });

});