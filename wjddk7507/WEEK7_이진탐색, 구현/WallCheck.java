import java.util.*;

public class WallCheck {
    static int N = 12;
    static int MinCnt = Integer.MAX_VALUE;
    static int[] Weak = { 1, 5, 6, 10 };
    static int[] Dist = { 1, 2, 3, 4 };

    public static void main(String[] args) {
        Arrays.sort(Dist);

        for (int i = 0; i < Weak.length; i++) {
            solve(1, i, 0);
        }

        MinCnt = MinCnt == Integer.MAX_VALUE ? -1 : MinCnt;
        System.out.println(MinCnt);
    }

    static void solve(int cnt, int pos, int visited) {
        if (cnt > Dist.length) {
            return;
        }
        if (cnt >= MinCnt) {
            return;
        }

        for (int i = 0; i < Weak.length; i++) {
            int nextPos = (pos + i) % Weak.length;
            int diff = Weak[nextPos] - Weak[pos];

            if (nextPos < pos) {
                diff += N;
            }

            if (diff > Dist[Dist.length - cnt]) {
                break;
            }

            visited |= 1 << nextPos;
        }

        if (visited == (1 << Weak.length) - 1) {
            MinCnt = cnt;
            return;
        }

        for (int i = 0; i < Weak.length; i++) {
            if ((visited & (1 << i)) != 0)
                continue;
            solve(cnt + 1, i, visited);
        }
    }
}
