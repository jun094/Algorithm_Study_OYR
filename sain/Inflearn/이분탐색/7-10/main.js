console.log("main.js");

function solution(m, nums) {
  let answer = 0;
  const sorted = nums.sort();

  let start, mid, end;
  start = 0;
  end = sorted.length - 1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (sorted[mid] === m) {
      answer = mid + 1;
      break;
    } else if (sorted[mid] > m) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return answer;
}

const input = {
  m: 32,
  nums: [23, 87, 65, 12, 57, 32, 99, 81],
};

const { m, nums } = input;

console.log(solution(m, nums));
