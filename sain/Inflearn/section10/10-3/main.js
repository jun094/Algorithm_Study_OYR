console.log("main.js");

function solution(input) {
  const n = input.length;
  const counts = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    let maxCnt = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (input[i] > input[j]) {
        if (maxCnt < counts[j]) maxCnt = counts[j];
      }
    }
    counts[i] += maxCnt;
  }

  return Math.max(...counts);
}

const input = [5, 3, 7, 8, 6, 2, 9, 4];

console.log(solution(input));
