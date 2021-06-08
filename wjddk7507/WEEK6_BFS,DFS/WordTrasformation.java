public class WordTrasformation {
    static int answer;
    static boolean[] visited;

    public static void main(String[] args) {
        String begin = "hit";
        String target = "cog";
        String[] words = { "hot", "dot", "dog", "lot", "log", "cog" };

        answer = words.length + 1;
        visited = new boolean[words.length];
        dfs(begin, target, 0, words);

        System.out.println(answer == words.length + 1 ? 0 : answer);
    }

    public static void dfs(String begin, String target, int cnt, String[] words) {
        if (begin.equals(target)) {
            answer = (answer < cnt) ? answer : cnt;
            return;
        }

        for (int i = 0; i < words.length; i++) {
            if (!visited[i] && check(begin, words[i])) {
                visited[i] = true;
                dfs(words[i], target, cnt + 1, words);
                visited[i] = false;
            }
        }
    }

    public static boolean check(String begin, String str) {
        int cnt = 0;
        for (int i = 0; i < begin.length(); i++) {
            if (begin.charAt(i) != str.charAt(i)) {
                cnt++;
            }
        }
        return cnt == 1 ? true : false;
    }
}