console.log("main.js");

function solution(N, number) {
  const dp = Array.from(Array(8), () => new Set());

  for (let i = 0; i < 8; i++) {
    dp[i].add(parseInt(new Array(i + 1).fill(N).join("")));
  }

  if (dp[0].has(number)) return 1;
  for (let i = 1; i < 8; i++) {
    for (let j = 0; j < i; j++) {
      for (let op1 of dp[j]) {
        for (let op2 of dp[i - j - 1]) {
          dp[i].add(op1 + op2);
          dp[i].add(op1 - op2);
          dp[i].add(op1 * op2);
          op2 !== 0 && dp[i].add(Math.floor(op1 / op2));
        }
      }
    }
    if (dp[i].has(number)) return i + 1;
  }

  return -1;
}

const input1 = {
  N: 5,
  number: 12,
};

const input2 = {
  N: 2,
  number: 11,
};

const input3 = {
  N: 5,
  number: 5,
};

const { N, number } = input3;

console.log(solution(N, number));
