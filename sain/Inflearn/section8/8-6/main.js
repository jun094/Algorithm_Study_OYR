console.log("main.js");

function solution(C, weights) {
  let answer = 0;
  const wLen = weights.length;

  function findMax(idx, sum) {
    if (idx === wLen) {
      if (answer < sum && sum <= C) answer = sum;
      return;
    }
    findMax(idx + 1, sum + weights[idx]);
    findMax(idx + 1, sum);
  }

  findMax(0, 0);

  return answer;
}

const input = {
  C: 259,
  weights: [81, 58, 42, 33, 61],
};

const { C, weights } = input;

console.log(solution(C, weights));
