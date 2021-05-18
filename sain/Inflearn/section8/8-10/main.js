console.log("main.js");

function solution(limit, nums) {
  let answer = [];
  const numCounts = nums.length;
  const tmp = new Array(limit).fill(0);
  const includes = new Array(numCounts).fill(0);

  function countAll(l) {
    if (l >= limit) {
      answer.push(tmp.slice());
      return;
    }

    for (let i = 0; i < numCounts; i++) {
      if (includes[i] === 0) {
        includes[i] = 1;
        tmp[l] = nums[i];
        countAll(l + 1);
        includes[i] = 0;
      }
    }
  }

  countAll(0);

  return answer;
}

const input = {
  limit: 2,
  nums: [3, 6, 9],
};

const { limit, nums } = input;

console.log(solution(limit, nums));
