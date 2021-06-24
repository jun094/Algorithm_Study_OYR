// https://ko.javascript.info/task/array-negative
// https://www.youtube.com/watch?v=G-9-_2f5NKQ
console.log("main.js");

const combinations = function (p, r) {
  const results = [];
  if (r === 1) return p.map((d) => [d]);
  const n = p.length;
  for (let i = 0; i < n; i++) {
    const rest = p.slice(i + 1);
    const comb = combinations(rest, r - 1);
    const attached = comb.map((c) => [p[i], ...c]);
    results.push(...attached);
  }
  return results;
};

function solution(n, weak, dist) {
  const dLen = dist.length;
  dist.sort((a, b) => b - a);
  weak = new Proxy(weak, {
    get(target, prop, receiver) {
      if (prop < 0) prop = +prop + target.length;
      return Reflect.get(target, prop, receiver);
    },
  });

  for (let i = 1; i <= dLen; i++) {
    for (let item of combinations(
      weak.map((d, idx) => idx),
      i
    )) {
      const d = [];
      for (let j = 0; j < i; j++) {
        d.push((weak[item[(j + 1) % i] - 1] - weak[item[j]] + n) % n);
      }
      d.sort((a, b) => b - a);
      let rst = true;
      for (let j = 0; j < i; j++) {
        if (dist[j] < d[j]) {
          rst = false;
          break;
        }
      }
      if (rst) return i;
    }
  }

  return -1;
}

const input1 = {
  n: 12,
  weak: [1, 5, 6, 10],
  dist: [1, 2, 3, 4],
};

const input2 = {
  n: 12,
  weak: [1, 3, 4, 9, 10],
  dist: [3, 5, 7],
};

const input3 = {
  n: 200,
  weak: [0, 100],
  dist: [1, 1],
};

const { n, weak, dist } = input1;

console.log(solution(n, weak, dist));
