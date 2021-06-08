const findRT = (arr, n, target) => {
    let lt = 0;
    let rt = n;

    while (lt < rt) {
        let mid = Math.floor((lt + rt) / 2);

        if (target < arr[mid]) rt = mid;
        else lt = mid + 1;
    }

    return rt;
};

//순열 구하기
const makePermutaion = (arr) => {
    let tmp = [];
    let n = arr.length;
    let check = Array(n).fill(0);
    let permutation = Array(n).fill(0);

    const dfs = (level) => {
        if (level === n) {
            tmp.push(permutation.slice());
            return;
        }

        for (let i = 0; i < n; i++) {
            if (check[i] === 0) {
                check[i] = arr[i];
                permutation[level] = arr[i];
                dfs(level + 1);

                //중요 !!!!
                check[i] = 0;
            }
        }
    };
    dfs(0);

    return tmp;
};

const solution = (n, weak, dist) => {
    let answer = 9999;
    const weak_len = weak.length;
    const dist_len = dist.length;
    let weakArr = weak.concat(weak.map((i) => i + n)); //원형 배열을 1차원 배열로 변경
    let distArr = makePermutaion(dist);

    //console.log(distArr);

    const countFriends = (s, f) => {
        let cnt = 0; // 사용된 친구 수
        let idx = s; //weak 지역 탐색 시작할 위치
        let visited_num = 0; // weak 지역 탐색한 수

        //console.log('현재 탐색 시작 위치는 ', idx);

        while (cnt <= dist_len) {
            if (visited_num >= weak_len) break;

            let lt = idx;
            let rt = findRT(weakArr, weak_len * 2, weakArr[idx] + f[cnt]);

            //console.log(lt, rt);
            visited_num += rt - lt;
            idx = rt;

            cnt++;
        }

        //console.log('사용된 친구 수 ', cnt);
        return cnt;
    };

    for (let i = 0, len = distArr.length; i < len; i++) {
        let friends = distArr[i];

        //console.log('탐색할 친구 순서', friends);

        for (let start = 0; start < weak_len; start++) {
            let cnt = countFriends(start, friends);

            answer = answer > cnt ? cnt : answer;
        }
    }

    if (answer > dist_len) return -1;

    return answer;
};

solution(12, [1, 3, 4, 9, 10], [3, 5, 7]);
