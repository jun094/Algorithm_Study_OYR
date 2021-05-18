console.log("main.js");
// https://velog.io/@diddnjs02/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%84%AC-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0

function isUnion(cycle) {
  const arrLen = cycle.length;
  for (let i = 1; i < arrLen; i++) {
    if (cycle[i] !== cycle[i - 1]) return false;
  }
  return true;
}

function changeCycle(cycle, from, to) {
  const cycleFrom = cycle[from];
  const cycleTo = cycle[to];
  const arrLen = cycle.length;

  for (let i = 0; i < arrLen; i++) {
    if (cycle[i] === cycleTo) cycle[i] = cycleFrom;
  }

  return cycle;
}

function solution(n, costs) {
  let answer = 0;
  const sorted = costs.sort((a, b) => a[2] - b[2]);
  let cycle = Array(n)
    .fill(0)
    .map((d, i) => i);

  while (!isUnion(cycle)) {
    const current = sorted.shift();
    const [from, to, weight] = current;
    if (cycle[from] !== cycle[to]) {
      cycle = changeCycle(cycle, from, to);
      answer += weight;
    }
  }

  return answer;
}

const input1 = {
  n: 4,
  costs: [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ],
};

const { n, costs } = input1;

console.log(solution(n, costs));
