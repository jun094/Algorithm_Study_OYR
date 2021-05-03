console.log("main.js");

function solution(input) {
  let answer = null;
  let maxIdx = 0;
  let maxSum = 0;
  const arrLen = input.length;

  for (let i = 0; i < arrLen; i++) {
    const sum = (input[i] + "")
      .split("")
      .map((d) => parseInt(d))
      .reduce((acc, value) => acc + value, 0);

    if (maxSum < sum) {
      maxIdx = i;
      maxSum = sum;
    } else if (maxSum === sum) {
      if (input[i] > input[maxIdx]) maxIdx = i;
    }
  }

  answer = input[maxIdx];

  return answer;
}

const input = [128, 460, 603, 40, 521, 137, 123];

console.log(solution(input));
