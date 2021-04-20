console.log("main.js");

function solution(input) {
  let answer = "";
  let cnt = 1;
  const strLen = input.length;

  for (let i = 0; i < strLen; i++) {
    if (i === 0 || input[i] !== input[i - 1]) {
      if (cnt > 1) answer += cnt;
      answer += input[i];
      cnt = 1;
    } else {
      cnt++;
    }
  }

  return answer;
}

const input = "KKHSSSSSSSE";

console.log(solution(input));
