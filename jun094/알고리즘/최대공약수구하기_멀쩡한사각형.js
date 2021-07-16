//https://programmers.co.kr/learn/courses/30/lessons/62048

// 최대 공약수 구하기 - 유클리드 호제법
const gcd = (a, b) => {
    const mod = a % b;

    if (mod === 0) return b;
    else {
        return gcd(b, mod);
    }
};
const solution = (w, h) => {
    let lineRectNum = w + h - gcd(w, h); // 대각선에 걸리는 사각형 개수

    return w * h - lineRectNum;
};
solution(8, 12);
