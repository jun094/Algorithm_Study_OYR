console.log("main.js");

function solution(n, f) {
  let answer = null;
  const check = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  const combs = [];
  const p = [];
  const includes = Array(n).fill(0);

  function Combination(n, r) {
    if (check[n][r]) return check[n][r];
    if (n === r || r === 0) {
      return 1;
    }
    return (check[n][r] = Combination(n - 1, r - 1) + Combination(n - 1, r));
  }

  function Predictable(l, sum) {
    if (answer) return;
    if (l >= n && sum === f) {
      answer = p.slice();
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!includes[i]) {
        includes[i] = 1;
        p[l] = i + 1;
        Predictable(l + 1, sum + combs[l] * p[l]);
        includes[i] = 0;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    combs[i] = Combination(n - 1, i);
  }

  Predictable(0, 0);

  return answer;
}

const input = {
  n: 4,
  f: 16,
};

const { n, f } = input;

console.log(solution(n, f));
