const solution = (clothes) => {
    const n = clothes.length;
    let answer = 1;
    let hm = new Map();

    for (let [name, type] of clothes) {
        if (hm.get(type) === undefined) {
            hm.set(type, 2);
        } else {
            hm.set(type, hm.get(type) + 1);
        }
    }

    for (let val of hm.values()) {
        answer *= val;
    }

    return answer - 1;
};
solution([
    ['crowmask', 'face'],
    ['bluesunglasses', 'face'],
    ['smoky_makeup', 'face'],
]);
