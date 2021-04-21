console.log("main.js");

function solution(array) {
  let answer = "";
  let arrLen = array.length;

  for (let i = 0; i < arrLen; i++) {
    if (i === 0 || array[i - 1] < array[i]) answer += array[i] + " ";
  }

  return answer;
}

const array = [7, 3, 9, 5, 6, 12];

console.log(solution(array));
