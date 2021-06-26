const solution = (people, limit) => {
    const n = people.length;
    let answer = 0;

    //무인도에 갇힌 사람 1명일때
    if (n === 1) return 1;

    people.sort((a, b) => a - b);

    let l = 0;
    let r = n - 1;
    while (l <= r) {
        if (l === r) {
            answer++;
            break;
        }
        let small = people[l];
        let big = people[r];

        if (small + big <= limit) {
            l++;
            r--;
        } else {
            r--;
        }

        answer++;
    }

    return answer;
};

solution([70, 50, 80, 50], 100);
