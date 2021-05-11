console.log("main.js");

function solution(arr) {
  let answer = null;
  const arrLen = arr.length;

  for (let i = 0; i < arrLen; i++) {
    for (let j = 0; j < arrLen - 1 - i; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  answer = arr;
  return answer;
}

const input = [1, 2, 3, -3, -2, 5, 6, -6];

console.log(solution(input));
