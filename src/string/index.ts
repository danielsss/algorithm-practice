import { Comparator } from '../utils';

class StringAlgorithm extends Comparator {

  /**
   * 20. Valid Parentheses
   */
  public isValidParentheses(s: string): boolean {
    const brackets = {
      ')' : '(',
      ']' : '[',
      '}' :  '{'
    };
    let stack = [];
    let chars = s.split('');

    for (let char of chars) {
      if (!isClosing(char)) {
        stack.push(char);
      } else {
        const opening = stack.pop();
        if (brackets[char] !== opening) {
          return false;
        }
      }
    }

    return stack.length === 0;

    function isClosing(s: string): boolean {
      return brackets.hasOwnProperty(s);
    }
  }
}

export default StringAlgorithm;