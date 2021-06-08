//https://youtu.be/2zjoKjt97vQ?t=2267

const solution = (N, plans) => {
    const arr = plans.split(' ');
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, 0, -1];
    let location = [1, 1];

    for (let i = 0, len = arr.length; i < len; i++) {
        const direction = arr[i];
        let tmp = location.slice();

        if (direction === 'U') {
            tmp[0] += dx[0];
            tmp[1] += dy[0];
        } else if (direction === 'R') {
            tmp[0] += dx[1];
            tmp[1] += dy[1];
        } else if (direction === 'D') {
            tmp[0] += dx[2];
            tmp[1] += dy[2];
        } else {
            tmp[0] += dx[3];
            tmp[1] += dy[3];
        }

        //경로 이탈
        if (tmp[0] < 1 || tmp[0] > N || tmp[1] < 1 || tmp[1] > N) {
            //경로 무시
            continue;
        } else {
            location = tmp.slice();
        }
    }

    return location;
};

solution(5, 'R R R U D D');
