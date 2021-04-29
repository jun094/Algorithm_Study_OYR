console.log("main.js");

function checkBraces(circledInput) {
  const stack = [];
  const inputLen = circledInput.length;
  for (let i = 0; i < inputLen; i++) {
    switch (circledInput[i]) {
      case "(":
      case "{":
      case "[":
        stack.push(circledInput[i]);
        break;
      default:
        const compare = stack.pop();
        if (!compare) return false;
        if (compare === "(" && circledInput[i] === ")") {
        } else if (compare === "{" && circledInput[i] === "}") {
        } else if (compare === "[" && circledInput[i] === "]") {
        } else {
          return false;
        }
        break;
    }
  }
  return !stack.length;
}

function solution(input) {
  let answer = 0;
  const inputLen = input.length;

  for (let i = 0; i < inputLen; i++) {
    if (i > 0) {
      let circled = "";
      for (let j = 1; j <= inputLen; j++) {
        if (j === inputLen) circled += input[0];
        else circled += input[j];
      }
      input = circled;
    }
    if (checkBraces(input)) answer++;
  }

  return answer;
}

const input1 = "[](){}";
const input2 = "}]()[{";
const input3 = "[)(]";
const input4 = "}}}";
const input5 = "{{";

console.log(solution(input5));
