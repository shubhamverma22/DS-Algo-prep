// Check for Balanced Brackets in an expression (well-formedness) using Stack
/*
E.g:-

Input: exp = “[()]{}{[()()]()}”
Output: Balanced
Explanation: all the brackets are well-formed


Approach:-
The idea is to put all the opening brackets in the stack. Whenever you hit a closing bracket, search if the top of the stack is the opening bracket of the same nature.
If this holds then pop the stack and continue the iteration, in the end if the stack is empty, it means all brackets are well-formed . Otherwise, they are not balanced.

Steps to follow:-
1. initalize a Stack
2. Traverse a exp String
    - if the current character is a starting bracket {, (, [ then push into the stack.
    - if the current charcter is closing bracket then pop from stack and if the popped character is the matching starting bracket then fine.
    - Else brackets are Not Balanced.
3. After complete traversal, if there is some starting bracket left in stack then Not balanced, else Balanced.
*/

/**
 * @param {string} exp
 * @return {boolean}
 */

const checkPalindrome = (exp) => {
  let stack = [];
  if (!exp) {
    return false;
  }
  for (let i = 0; i < exp.length; i++) {
    let x = exp[i];
    if (x == '(' || x == '{' || x == '[') {
      stack.push(x);
      continue;
    }

    if (stack.length == 0) {
      return false;
    }
    let check;
    switch (x) {
      case ')':
        check = stack.pop();
        if (check == '{' || check == '[') {
          return false;
        }
        break;
      case '}':
        check = stack.pop();
        if (check == '(' || check == '[') {
          return false;
        }
        break;
      case ']':
        check = stack.pop();
        if (check == '{' || check == '(') {
          return false;
        }
        break;
    }
  }
  return stack.length == 0;
};

const exp = '[()]{}{[()()]()}';

const isValidPalindrome = checkPalindrome(exp);
console.log(isValidPalindrome);
