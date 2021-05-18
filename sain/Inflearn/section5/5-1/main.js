console.log("main.js");

function solution(array1, array2) {
  let answer = [];
  const aLen = array1.length;
  const bLen = array2.length;
  let p1 = 0;
  let p2 = 0;

  while (p1 < aLen && p2 < bLen) {
    if (array1[p1] < array2[p2]) answer.push(array1[p1++]);
    else answer.push(array2[p2++]);
  }
  while (p1 < aLen) answer.push(array1[p1++]);
  while (p2 < bLen) answer.push(array2[p2++]);

  return answer;
}

const array1 = [1, 3, 8];
const array2 = [2, 3, 6, 7, 9];

console.log(solution(array1, array2));
