const solution = (routes) => {
    let answer = 1;
    const len = routes.length;
    let tmp = 0;

    routes.sort((a, b) => {
        return a[1] - b[1];
    });
    tmp = routes[0][1];

    for (let i = 1; i < len; i++) {
        if (routes[i][0] > tmp) {
            tmp = routes[i][1];
            answer++;
        }
    }
    console.log(answer);
};

let routes = [
    [-20, 15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
];
solution(routes);
