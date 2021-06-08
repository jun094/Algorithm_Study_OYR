import java.util.Arrays;

public class ColumnAndBeam {
    static boolean[][] Pillar;
    static boolean[][] Bar;

    public static void main(String[] args) {
        int n = 5;
        int[][] build_frame = { { 1, 0, 0, 1 }, { 1, 1, 1, 1 }, { 2, 1, 0, 1 }, { 2, 2, 1, 1 }, { 5, 0, 0, 1 },
                { 5, 1, 0, 1 }, { 4, 2, 1, 1 }, { 3, 2, 1, 1 } };

        Pillar = new boolean[n + 2][n + 2];
        Bar = new boolean[n + 2][n + 2];

        int cnt = 0;
        for (int[] build : build_frame) {
            int x = build[0], y = build[1];
            int type = build[2], cmd = build[3];

            if (type == 0) {
                if (cmd == 1) {
                    if (checkPillar(x, y)) {
                        Pillar[x][y] = true;
                        cnt++;
                    }
                } else {
                    Pillar[x][y] = false;
                    if (canDelete(x, y) == false) {
                        Pillar[x][y] = true;
                    } else {
                        cnt--;
                    }
                }
            } else {
                if (cmd == 1) {
                    if (checkBar(x, y)) {
                        Bar[x][y] = true;
                        cnt++;
                    }
                } else {
                    Bar[x][y] = false;
                    if (canDelete(x, y) == false) {
                        Bar[x][y] = true;
                    } else {
                        cnt--;
                    }
                }
            }
        }

        int[][] answer = new int[cnt][3];
        cnt = 0;

        for (int x = 0; x <= n; ++x) {
            for (int y = 0; y <= n; ++y) {
                if (Pillar[x][y]) {
                    answer[cnt][0] = x;
                    answer[cnt][1] = y;
                    answer[cnt++][2] = 0;
                }
                if (Bar[x][y]) {
                    answer[cnt][0] = x;
                    answer[cnt][1] = y;
                    answer[cnt++][2] = 1;
                }
            }
        }
        System.out.println(Arrays.deepToString(answer));
    }

    static boolean checkPillar(int x, int y) {
        if (y == 0 || Pillar[x][y - 1])
            return true;
        if ((x > 0 && Bar[x - 1][y]) || Bar[x][y])
            return true;
        return false;
    }

    static boolean checkBar(int x, int y) {
        if (Pillar[x][y - 1] || Pillar[x + 1][y - 1])
            return true;
        if (x > 0 && Bar[x - 1][y] && Bar[x + 1][y])
            return true;
        return false;
    }

    static boolean canDelete(int x, int y) {
        for (int i = Math.max(x - 1, 0); i <= x + 1; ++i) {
            for (int j = y; j <= y + 1; ++j) {
                if (Pillar[i][j] && checkPillar(i, j) == false) {
                    return false;
                }
                if (Bar[i][j] && checkBar(i, j) == false) {
                    return false;
                }
            }
        }
        return true;
    }
}
