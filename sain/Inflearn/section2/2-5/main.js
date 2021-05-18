console.log("main.js");

function solution(array) {
  let answer = "";
  const arrLen = array.length;
  const mappedArr = array.map((d) => ({ score: d, ranks: 1 }));
  for (let i = 0; i < arrLen; i++) {
    for (let j = 0; j < arrLen; j++) {
      if (mappedArr[i].score < mappedArr[j].score) mappedArr[i].ranks++;
    }
  }
  mappedArr.forEach(({ ranks }) => {
    answer += ranks + " ";
  });
  return answer;
}

const array = [87, 89, 92, 100, 76];
const array2 = [87, 89, 100, 100, 100];

console.log(solution(array));
