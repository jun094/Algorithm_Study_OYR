const solution = (bridge_length, weight, truck_weights) => {
    let answer = 0;
    const n = truck_weights.length;
    let q = Array(bridge_length).fill(0);
    let visited = [];
    let sum = 0;

    while (visited.length !== n) {
        let visit_t = q.pop(); // 다리에서 맨 앞에 있는 트럭 빼주기
        let q_len = q.length;
        let t = 0; // 대상 트럭

        //대상 트럭 정하기
        if (truck_weights.length !== 0) {
            t = truck_weights.shift();
        }

        //실제 트럭(0이 아닌)만 '다리를 지난 트럭'에 넣어줌
        if (visit_t !== 0) {
            visited.push(visit_t);
            sum -= visit_t;
        }

        //조건 검사 후, 큐에 삽입
        //조건 1 : 무게가 weight 이하
        //조건 2 : 길이가 bridge_length 미만
        if (sum + t <= weight && q_len < bridge_length) {
            q.unshift(t);
            sum += t;
        }
        //큐에 들어가지 못하면, 0 삽입
        else {
            q.unshift(0);
            truck_weights.unshift(t);
        }

        answer++;
        // console.log(answer, '초----');
        // console.log('q : ', JSON.parse(JSON.stringify(q)));

        // console.log('v : ', JSON.parse(JSON.stringify(visited)));
    }

    return answer;
};
solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
