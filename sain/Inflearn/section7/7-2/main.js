console.log("main.js");

function solution(arr) {
  let answer = null;
  const arrLen = arr.length;

  for (let i = 0; i < arrLen; i++) {
    for (let j = 0; j < arrLen - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  answer = arr;
  return answer;
}

const input = [13, 5, 11, 7, 23, 15];

console.log(solution(input));
