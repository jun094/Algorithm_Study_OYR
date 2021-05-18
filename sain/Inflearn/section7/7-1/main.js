console.log("main.js");

function solution(arr) {
  let answer = null;
  const arrLen = arr.length;

  for (let i = 0; i < arrLen; i++) {
    let min = arr[i];
    let minIdx = i;
    for (let j = i; j < arrLen; j++) {
      if (min > arr[j]) {
        min = arr[j];
        minIdx = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }

  answer = arr;
  return answer;
}

const input = [13, 5, 11, 7, 23, 15];

console.log(solution(input));
