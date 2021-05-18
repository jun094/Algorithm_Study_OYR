console.log("main.js");

function solution(array1, array2) {
  let answer = [];
  let p1 = 0;
  let p2 = 0;
  const aLen = array1.length;
  const bLen = array2.length;
  array1.sort();
  array2.sort();

  while (p1 < aLen && p2 < bLen) {
    if (array1[p1] === array2[p2]) answer.push(array1[p1++]);
    else if (array1[p1] > array2[p2]) p2++;
    else p1++;
  }

  return answer;
}

const array1 = [1, 3, 9, 5, 2];
const array2 = [3, 2, 5, 7, 8];

console.log(solution(array1, array2));
