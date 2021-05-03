console.log("main.js");
// https://velog.io/@ansrjsdn/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-level3-%EC%9E%85%EA%B5%AD%EC%8B%AC%EC%82%AC

function solution(n, times) {
  times.sort((a, b) => a - b);
  const arrLen = times.length;
  let left = 1;
  let right = n * times[times.length - 1];
  let answer = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let peoples = 0;
    for (let i = 0; i < arrLen; i++) {
      peoples += Math.floor(mid / times[i]);
      if (peoples >= n) {
        answer = Math.min(mid, answer);
      }
    }
    if (peoples >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

const input1 = {
  n: 6,
  times: [7, 10],
};

const { n, times } = input1;

console.log(solution(n, times));
