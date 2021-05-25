console.log("main.js");

function solution(s, e) {
  let answer = 0;
  const q = [s];
  const visited = { [s]: 0 };

  while (q.length) {
    const v = q.shift();
    for (let t of [v - 1, v + 1, v + 5]) {
      if (t === e) return visited[v] + 1;
      if (t > 0 && t <= 10000 && !visited[t]) {
        q.push(t);
        visited[t] = visited[v] + 1;
      }
    }
  }

  return answer;
}

const input1 = {
  s: 5,
  e: 14,
};

const input2 = {
  s: 8,
  e: 3,
};

const { s, e } = input2;

console.log(solution(s, e));
