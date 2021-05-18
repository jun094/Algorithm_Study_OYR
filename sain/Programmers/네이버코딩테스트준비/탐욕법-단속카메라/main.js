console.log("main.js");
// https://kyun2da.github.io/2020/07/20/checkCamera/

function solution(routes) {
  let answer = 0;
  const sorted = routes.sort((a, b) => a[1] - b[1]);
  const arrLen = sorted.length;

  let out = -30001;

  for (let i = 0; i < arrLen; i++) {
    if (sorted[i][0] > out) {
      answer++;
      out = sorted[i][1];
    }
  }

  return answer;
}

const routes = [
  [-20, 15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
];

const routes2 = [
  [0, 0],
  [0, 0],
  [2, 2],
  [1, 2],
];

const routes3 = [
  [0, 1],
  [0, 1],
  [2, 2],
];

console.log(solution(routes2));
