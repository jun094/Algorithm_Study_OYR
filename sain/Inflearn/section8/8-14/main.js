console.log("main.js");

function solution(n, m) {
  let answer = [];
  const tmp = new Array(m).fill(0);

  function allCombinations(l, s) {
    if (l >= m) {
      answer.push(tmp.slice());
      return;
    }

    for (let i = s; i < n; i++) {
      tmp[l] = i + 1;
      allCombinations(l + 1, i + 1);
    }
  }

  allCombinations(0, 0);

  return answer;
}

const input = {
  n: 4,
  m: 2,
};

const { n, m } = input;

console.log(solution(n, m));
