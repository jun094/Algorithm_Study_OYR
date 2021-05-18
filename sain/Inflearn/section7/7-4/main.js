console.log("main.js");

function solution(arr) {
  let answer = null;
  const arrLen = arr.length;

  for (let i = 0; i < arrLen - 1; i++) {
    let j = i;
    while (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      j--;
    }
  }

  answer = arr;
  return answer;
}

const input = [11, 7, 5, 6, 10, 9];

console.log(solution(input));
