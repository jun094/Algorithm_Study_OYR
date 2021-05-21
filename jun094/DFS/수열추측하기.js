const solution = (n, top) => {
    let answer = [];

    let flag = true;
    let combi_tmp = [];
    let dp = Array.from(Array(n + 1), () => new Array(n + 1).fill(-1)); // 메모이제이션을 하기 위한 배열

    let permu_check = Array(n).fill(0); //순열 체크 여부 배열
    let permu_tmp = Array(n).fill(0);

    const combination = (n, r) => {
        if (n === r || r === 0) return 1;
        else if (n !== 1 && r === 1) return n;
        else if (dp[n][r] !== -1) return dp[n][r];
        else {
            let tmp = combination(n - 1, r - 1) + combination(n - 1, r);
            dp[n][r] = tmp;

            return tmp;
        }
    };
    for (let i = 0; i < n; i++) {
        combi_tmp[i] = combination(n - 1, i);
    }

    const permutation = (level) => {
        if (flag) {
            if (level === n) {
                //수열 추측하기 시작 !!
                let sum = 0;

                for (let i = 0; i < n; i++) {
                    sum += permu_tmp[i] * combi_tmp[i];
                }

                if (sum === top) {
                    flag = false;
                    answer = permu_tmp.slice();
                }
            }
            for (let i = 0; i < n; i++) {
                if (permu_check[i] === 0) {
                    permu_check[i] = 1; //방문 체크

                    permu_tmp[level] = i + 1;
                    permutation(level + 1);

                    permu_check[i] = 0;
                }
            }
        }
    };
    permutation(0);

    return answer;
};

solution(4, 16);
