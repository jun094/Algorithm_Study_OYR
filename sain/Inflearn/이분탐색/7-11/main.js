console.log("main.js");

function solution(m, vids) {
  let answer = 0;
  let left = Math.max(...vids);
  let right = vids.reduce((acc, val) => acc + val, 0);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sum = 0;
    let dvds = 1;
    for (let i = 0; i < vids.length; i++) {
      if (sum + vids[i] <= mid) {
        sum += vids[i];
      } else {
        dvds++;
        sum = vids[i];
      }
    }
    if (dvds <= m) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

const input = {
  m: 3,
  vids: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};

const { m, vids } = input;

console.log(solution(m, vids));
