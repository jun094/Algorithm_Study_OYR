const preorder = (n, arr) => {
    if (n > 7) return;

    arr.push(n);

    preorder(n * 2, arr);
    preorder(n * 2 + 1, arr);

    return arr;
};

const inorder = (n, arr) => {
    if (n > 7) return;

    inorder(n * 2, arr);
    arr.push(n);
    inorder(n * 2 + 1, arr);

    return arr;
};

const postorder = (n, arr) => {
    if (n > 7) return;

    postorder(n * 2, arr);
    postorder(n * 2 + 1, arr);
    arr.push(n);

    return arr;
};

const solution = (start) => {
    let answer = [[], [], []];

    let preArr = preorder(start, []);
    let inArr = inorder(start, []);
    let postArr = postorder(start, []);

    answer[0] = preArr;
    answer[1] = inArr;
    answer[2] = postArr;

    return answer;
};

solution(1);
