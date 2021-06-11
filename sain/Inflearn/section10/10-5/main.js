console.log("main.js");

function solution(input) {
  let answer = 0;
  const [n, m] = input.shift();
  const dy = new Array(m + 1).fill(0);

  for (let i = 0; i < n; i++) {
    const [score, minutes] = input[i];
    for (let j = m; j >= minutes; j--) {
      dy[j] = Math.max(dy[j], dy[j - minutes] + score);
    }
    answer = dy[m];
  }

  return answer;
}

const input = [
  [5, 20],
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];

console.log(solution(input));
