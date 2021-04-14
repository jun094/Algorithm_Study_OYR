console.log("main.js");

function solution(N, arrayA, arrayB) {
  let answer = "";
  for (let i = 0; i < N; i++) {
    if (arrayA[i] === arrayB[i]) {
      answer += "D\n";
    } else if (
      (arrayA[i] === 1 && arrayB[i] === 3) ||
      (arrayA[i] === 2 && arrayB[i] === 1) ||
      (arrayA[i] === 3 && arrayB[i] === 2)
    ) {
      answer += "A\n";
    } else {
      answer += "B\n";
    }
  }
  return answer;
}

let N = parseInt(prompt("N 입력"));
let arrayA = prompt("A 배열 입력")
  .split(",")
  .map((d) => parseInt(d));
let arrayB = prompt("B 배열 입력")
  .split(",")
  .map((d) => parseInt(d));

console.log(N, arrayA, arrayB);

console.log(solution(N, arrayA, arrayB));
