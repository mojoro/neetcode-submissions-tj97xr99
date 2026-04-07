class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (Number.isInteger(parseInt(tokens[i]))) {
      stack.push(+tokens[i]);
    } else {
      let res = Number();
      const op1 = stack[stack.length - 2];
      const op2 = stack[stack.length - 1];
      eval(`res = ${op1} ${tokens[i]} ${op2}`);
      stack.pop();
      stack.pop();
      if (tokens[i] == '/') res = Math.trunc(res);
      stack.push(res);
    }
    console.log(stack);
  }
  console.log(Math.round(stack[stack.length - 1]));
  return Math.round(stack[stack.length - 1]);
} 
}
