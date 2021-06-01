console.log("main.js");

function solution(words, queries) {
  let answer = [];
  const rwords = words.slice().map((s) => s.split("").reverse().join(""));

  function comp(a, b) {
    let aLen = a.length;
    let bLen = b.length;
    if (aLen < bLen) {
      return true;
    } else if (aLen === bLen) {
      if (a < b) return true;
      return false;
    }
  }

  function upper_bound(left, right, finds, arr) {
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] > finds) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return right;
  }

  function lower_bound(left, right, finds, arr) {
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] >= finds) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return right;
  }

  words.sort((a, b) => (comp(a, b) ? -1 : 0));
  rwords.sort((a, b) => (comp(a, b) ? -1 : 0));

  for (let q of queries) {
    const qLen = q.length;
    if (q[0] === "?") {
      q = q.split("").reverse().join("");

      let lqs = q.replace(/\?/g, "a");
      let hqs = q.replace(/\?/g, "z");

      const rws = rwords.filter((s) => s.length === lqs.length);

      const lo = lower_bound(0, rws.length, lqs, rws);
      const hi = upper_bound(0, rws.length, hqs, rws);
      answer.push(hi - lo);
    } else {
      let lqs = q.replace(/\?/g, "a");
      let hqs = q.replace(/\?/g, "z");

      const ws = words.filter((s) => s.length === lqs.length);

      const lo = lower_bound(0, ws.length, lqs, ws);
      const hi = upper_bound(0, ws.length, hqs, ws);
      answer.push(hi - lo);
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
