console.log("main.js");

function solution(input) {
  let answer = "";
  let strLen = input.length;
  for (let i = 0; i < strLen; i++) {
    if (!isNaN(parseInt(input[i]))) {
      answer += input[i];
    }
  }
  return parseInt(answer);
}

const input = "g0en2T0s8eSoft";
const input2 = "";

console.log(solution(input));
