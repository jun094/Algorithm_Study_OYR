console.log("main.js");

function solution(num) {
  let answer = "";
  const q = [1];

  function bfs(num) {
    while (q.length) {
      const current = q.shift();
      if (current > num) break;
      answer += current + " ";
      q.push(current * 2);
      q.push(current * 2 + 1);
    }
  }

  bfs(7);

  return answer;
}

const input = 7;

console.log(solution(input));
