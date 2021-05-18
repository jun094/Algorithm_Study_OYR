console.log("main.js");

function solution(array) {
  let answer = 0;
  const arrLen = array.length;
  // 행 열의 합 중 가장 큰 값 우선 구하기
  for (let i = 0; i < arrLen; i++) {
    let hSum = 0;
    let vSum = 0;
    for (let j = 0; j < arrLen; j++) {
      hSum += array[i][j];
      vSum += array[j][i];
    }
    if (answer < hSum) answer = hSum;
    if (answer < vSum) answer = vSum;
  }
  // 대각 방향 합 구하기
  let xDnSum = 0;
  let xUpSum = 0;
  for (let i = 0; i < arrLen; i++) {
    xDnSum += array[i][i];
    xUpSum += array[i][arrLen - 1 - i];
  }
  if (answer < xDnSum) answer = xDnSum;
  if (answer < xUpSum) answer = xUpSum;
  return answer;
}

const array = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(solution(array));
