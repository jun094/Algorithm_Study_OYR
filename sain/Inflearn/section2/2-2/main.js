console.log("main.js");

function solution(N, array) {
  let answer = 0;
  let lastMax = 0;
  for (let i = 0; i < N; i++) {
    if (array[i] > lastMax) {
      lastMax = array[i];
      answer++;
    }
  }
  return answer;
}

let N = parseInt(prompt("N 입력"));
let array = prompt("배열 입력")
  .split(",")
  .map((d) => parseInt(d));

console.log(N, array);

console.log(solution(N, array));
