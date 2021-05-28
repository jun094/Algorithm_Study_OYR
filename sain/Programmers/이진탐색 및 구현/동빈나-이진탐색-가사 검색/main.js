console.log("main.js");

function solution(words, queries) {
  let answer = [];
  const wordsCount = words.length;
  const rwords = words.slice().map((s) => s.split("").reverse().join(""));

  function comp(a, b) {
    aLen = a.length;
    bLen = b.length;
    if (aLen < bLen) {
      return true;
    } else if (aLen === bLen) {
      if (a < b) return true;
      return false;
    }
  }

  function upper_bound(left, right, finds, arr, compareFn) {
    let result = 0;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (!compareFn(arr[mid], finds)) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return result;
  }

  function lower_bound(left, right, finds, arr, compareFn) {
    let result = 0;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (!compareFn(finds, arr[mid])) {
        left = mid + 1;
        result = right;
      } else {
        right = mid - 1;
        result = left;
      }
    }
    return result;
  }

  words.sort((a, b) => (comp(a, b) ? -1 : 0));
  rwords.sort((a, b) => (comp(a, b) ? -1 : 0));

  for (let q of queries) {
    const qLen = q.length;
    if (q[0] === "?") {
      q = q.split("").reverse().join("");

      let lqs = "";
      let hqs = "";

      for (let i = 0; i < qLen; i++) {
        lqs += q[i] === "?" ? "a" : q[i];
        hqs += q[i] === "?" ? "z" : q[i];
      }

      console.log(lqs);
      const lo = lower_bound(0, wordsCount, lqs, rwords, comp);
      // console.log(hqs);
      // const hi = upper_bound(0, wordsCount, lqs, rwords, comp);
    } else {
    }
  }

  return answer;
}

const input = {
  words: ["frodo", "front", "frost", "frozen", "frame", "kakao"],
  queries: ["fro??", "????o", "fr???", "fro???", "pro?"],
};

const { words, queries } = input;

console.log(solution(words, queries));

////////////////////////////////////////////////////////////////////////////

// 무지성 풀이
function solution2(words, queries) {
  let answer = [];
  const qSize = queries.length;

  for (let i = 0; i < qSize; i++) {
    const cq = queries[i];
    let cnt = 0;
    for (let w of words) {
      let flag = true;
      if (w.length === cq.length) {
        for (let c = 0; c < cq.length; c++) {
          if (cq[c] === "?" || cq[c] === w[c]) continue;
          else {
            flag = false;
            break;
          }
        }
      } else {
        flag = false;
      }
      if (flag) cnt++;
    }
    answer.push(cnt);
  }

  return answer;
}
