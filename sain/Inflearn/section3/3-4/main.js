console.log("main.js");

function solution(s, t) {
  let answer = "";
  const strLen = s.length;
  const distances = [];
  for (let i = 0; i < strLen; i++) {
    if (s[i] === t) {
      let cnt = 0;
      while (cnt < strLen) {
        if (distances[cnt] === undefined) {
          distances.push(Math.abs(cnt - i));
        } else if (distances[cnt] > Math.abs(cnt - i)) {
          distances[cnt] = Math.abs(cnt - i);
        }
        cnt++;
      }
    } else {
      continue;
    }
  }
  return distances;
}

const s = "teachermode";
const t = "e";

console.log(solution(s, t));
