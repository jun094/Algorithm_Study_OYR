console.log("main.js");

function solution(c, ns) {
  let answer = 0;
  ns.sort();
  let size = ns.length;
  let left = 1;
  let right = ns[size - 1];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let ep = ns[0];
    let horses = 1;
    for (let i = 1; i < size; i++) {
      if (ns[i] - ep >= mid) {
        ep = ns[i];
        horses++;
      }
    }

    if (horses >= c) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}

const input = {
  c: 3,
  ns: [1, 2, 8, 4, 9],
};

const { c, ns } = input;

console.log(solution(c, ns));
