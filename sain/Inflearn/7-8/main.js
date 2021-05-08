console.log("main.js");

function solution(input) {
  let answer = null;
  const arrLen = input.length;
  input.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let lastTime = 0;
  for (let i = 0; i < arrLen; i++) {
    if (input[i][0] >= lastTime) {
      answer++;
      lastTime = input[i][1];
    }
  }

  return answer;
}

const input1 = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

const input2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];

console.log(solution(input1));
