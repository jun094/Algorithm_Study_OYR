console.log("main.js");
//https://webigotr.tistory.com/309

function solution(begin, target, words) {
  let answer = 0;
  const arrLen = words.length;
  const visited = {};
  const q = [];

  q.push(begin);
  visited[begin] = 0;

  while (q.length) {
    const currentWord = q.shift();
    for (let i = 0; i < arrLen; i++) {
      const nextWord = words[i];
      const currents = currentWord.split("");
      const nexts = nextWord.split("");
      if (
        visited[nextWord] === undefined &&
        nexts.filter((d, i) => d !== currents[i]).length <= 1
      ) {
        q.push(nextWord);
        visited[nextWord] = visited[currentWord] + 1;
      }
    }
  }

  answer = visited[target] ? visited[target] : 0;
  return answer;
}

const input1 = {
  begin: "hit",
  target: "cog",
  words: ["hot", "dot", "dog", "lot", "log", "cog"],
};

const input2 = {
  begin: "hit",
  target: "cog",
  words: ["hot", "dot", "dog", "lot", "log"],
};

const { begin, target, words } = input1;

console.log(solution(begin, target, words));
