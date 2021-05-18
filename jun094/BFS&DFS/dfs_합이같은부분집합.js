const solution = (arr) => {
    const len = arr.length;
    let check = Array(len).fill(0);
    let tmp = [];
    let tmp2 = [];

    let answer = 'NO';
    let flag = false;

    const dfs = (i) => {
        if (flag) return;

        if (i === len) {
            let sum = 0;
            let str = '';

            for (let i = 0; i < len; i++) {
                if (check[i] !== 0) {
                    sum += check[i];
                    str += check[i];
                }
            }

            //기존의 부분집합의 합 중에 같은게 있을 때
            if (tmp.indexOf(sum) !== -1) {
                answer = 'YES';
                flag = true;
                console.log('기존', tmp2[tmp.indexOf(sum)], '새로운', str);
            } else {
                tmp.push(sum);
                tmp2.push(str);
            }
            return;
        }

        check[i] = arr[i];
        dfs(i + 1);

        check[i] = 0;
        dfs(i + 1);
    };

    dfs(0);

    return answer;
};

solution([1, 3, 5, 6, 7, 10]);
