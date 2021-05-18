console.log("main.js");

function solution(num, limit) {
  let answer = [];
  const tmp = new Array(limit).fill(0);

  function pwr(l) {
    if (l >= limit) {
      answer.push(tmp.slice());
      return;
    }
    for (let i = 0; i < num; i++) {
      tmp[l] = i + 1;
      pwr(l + 1);
    }
  }

  pwr(0);

  return answer;
}

const input = {
  num: 3,
  limit: 2,
};

const { num, limit } = input;

console.log(solution(num, limit));
