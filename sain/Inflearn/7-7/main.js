console.log("main.js");

function solution(input) {
  let answer = null;

  input.sort((a, b) => {
    if (a[0] < b[0]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  answer = input;

  return answer;
}

const input = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

console.log(solution(input));
