console.log("main.js");

function solution(n, weak, dist) {
  const INF = 9876543;
  let answer = INF;

  const friends = dist.length;
  const weaks = weak.length;
  dist.sort((a, b) => b - a);
  answer = friends;

  function core(cnt, pos, visited) {
    if (cnt > friends) return;
    if (cnt >= answer) return;
    for (let i = 0; i < weaks; i++) {
      const nextPos = (pos + i) % weaks;
      const diff =
        nextPos < pos
          ? n + weak[nextPos] - weak[pos]
          : weak[nextPos] - weak[pos];

      if (diff > dist[friends - cnt]) break;
      visited[nextPos] = true;

      if (!visited.filter((b) => b === false).length) {
        answer = cnt;
        return;
      }

      for (let i = 0; i < weaks; i++) {
        if (visited[i]) continue;
        core(cnt + 1, i, visited);
      }
    }
  }

  for (let p = 0; p < weaks; p++) {
    const visited = new Array(weaks).fill(false);
    core(1, p, visited);
  }

  return answer === INF ? -1 : answer;
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

const { n, weak, dist } = input3;

console.log(solution(n, weak, dist));
