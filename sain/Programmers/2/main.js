console.log("main.js");

function solution(citations) {
  let answer = 0;
  const citationLength = citations.length;
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citationLength; i++) {
    if (i >= citations[i]) break;
    answer++;
  }
  return answer;
}

let citations = prompt("배열 입력")
  .split(",")
  .map((d) => parseInt(d));

console.log(citations);

console.log(solution(citations));
