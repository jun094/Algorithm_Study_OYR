console.log("main.js");

function isAnagram(a, b, len) {
  const mapped = {};
  for (let i = 0; i < len; i++) {
    if (!mapped[a[i]]) mapped[a[i]] = 0;
    mapped[a[i]]++;
  }
  for (let i = 0; i < len; i++) {
    if (!mapped[b[i]] || mapped[b[i]] === 0) return false;
    mapped[b[i]]--;
  }
  return true;
}

function solution(input) {
  let answer = 0;
  let currentStr = "";
  const [s, t] = input;
  const sLen = s.length;
  const tLen = t.length;

  for (let i = 0; i < sLen; i++) {
    currentStr += s[i];
    if (i > tLen - 1) {
      currentStr = currentStr.slice(1, currentStr.length);
    }
    if (i >= tLen - 1) {
      if (isAnagram(currentStr, t, tLen)) answer++;
    }
  }

  return answer;
}

const input = ["bacaAacba", "acaA"];

console.log(solution(input));
