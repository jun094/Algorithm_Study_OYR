console.log("main.js");

function solution(array) {
  let answer = 0;
  const arrLen = array.length;
  let acc = 0;
  for (let i = 0; i < arrLen; i++) {
    if (array[i] === 1) {
      acc++;
    } else {
      acc = 0;
    }
    answer += acc;
  }
  return answer;
}

const array = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

console.log(solution(array));
