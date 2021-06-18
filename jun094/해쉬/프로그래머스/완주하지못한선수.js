const solution = (participant, completion) => {
    let answer = '';
    let hash = new Map();
    let p_len = participant.length;

    //hash 초기화
    for (let i = 0; i < p_len; i++) {
        let key = participant[i];
        let value = hash.get(key);

        if (value) {
            hash.set(key, value + 1);
        } else {
            hash.set(key, 1);
        }
    }

    //hash value값 -1씩 빼기
    for (let i = 0, n = completion.length; i < n; i++) {
        let key = completion[i];
        let value = hash.get(key);

        hash.set(key, value - 1);
    }

    //hash 탐색 -> value가 0인 key return
    for (let i = 0; i < p_len; i++) {
        if (hash.get(participant[i]) > 0) return participant[i];
    }

    return answer;
};

solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']);
