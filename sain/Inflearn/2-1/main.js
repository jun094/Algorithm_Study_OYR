console.log("main.js");

function solution(N, array) {
  let answer = [];
  let arrLen = array.length;
  let findBefore = 0;
  for (let i = 0; i < arrLen; i++) {
    if (array[i] === N) {
      if (i === 0) findBefore = array[i];
      else findBefore = array[i - 1];
      break;
    }
  }

  for (let i = 0; i < arrLen; i++) {
    if (array[i] > findBefore) answer.push(array[i]);
  }

  return answer;
}

let N = parseInt(prompt("자연수 N 입력"));
let array = prompt("배열 입력")
  .split(",")
  .map((d) => parseInt(d));

console.log(N, array);

console.log(solution(N, array));
