import { describe, it } from 'mocha';
import { expect } from 'chai';
import Roman from '../src/math/roman';


describe('- Mathematical Unit Test', function () {


  it('# 13. Roman to Integer', done => {
    const roman = new Roman();
    expect(roman.toInt('III')).to.eq(3);
    expect(roman.toInt('IV')).to.eq(4);
    expect(roman.toInt('LVIII')).to.eq(58);
    expect(roman.toInt('MCMXCIV')).to.eq(1994);
    done(null);
  });
});