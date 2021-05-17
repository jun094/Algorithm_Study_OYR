console.log("main.js");
// https://velog.io/@noyo0123/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-javascript-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4

function solution(n, computers) {
  let answer = 0;
  const arrLen = computers.length;
  const visited = Array(n).fill(false);

  function dfs(dp) {
    visited[dp] = true;
    for (let i = 0; i < arrLen; i++) {
      if (computers[dp][i] === 1 && !visited[i]) dfs(i);
    }
  }

  for (let i = 0; i < arrLen; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}

const input1 = {
  n: 3,
  computers: [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ],
};

const input2 = {
  n: 3,
  computers: [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ],
};

const { n, computers } = input1;

console.log(solution(n, computers));
