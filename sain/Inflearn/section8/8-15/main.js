console.log("main.js");

function solution(k, nums, m) {
  let answer = 0;
  const numCounts = nums.length;

  function findMultiplier(l, s, t) {
    if (l >= k) {
      if (t % m === 0) answer++;
      return;
    }

    for (let i = s; i < numCounts; i++) {
      findMultiplier(l + 1, i + 1, t + nums[i]);
    }
  }

  findMultiplier(0, 0, 0);

  return answer;
}

const input = {
  k: 3,
  nums: [2, 4, 5, 8, 12],
  m: 6,
};

const { k, nums, m } = input;

console.log(solution(k, nums, m));
