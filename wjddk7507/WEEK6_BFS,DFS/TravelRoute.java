import java.util.*;

public class TravelRoute {
    static ArrayList<String> answers;
    static boolean[] visited;

    public static void main(String[] args) {
        String[][] tickets = { { "ICN", "SFO" }, { "ICN", "ATL" }, { "SFO", "ATL" }, { "ATL", "ICN" },
                { "ATL", "SFO" } };
        answers = new ArrayList<String>();
        visited = new boolean[tickets.length];
        int cnt = 0;

        dfs(cnt, "ICN", "ICN", tickets);
        Collections.sort(answers);
        String[] answer = answers.get(0).split(" ");
        for (String str : answer) {
            System.out.print(str + " ");
        }
    }

    public static void dfs(int cnt, String present, String answer, String[][] ticktes) {
        if (cnt == ticktes.length) {
            answers.add(answer);
            return;
        }

        for (int i = 0; i < ticktes.length; i++) {
            if (!visited[i] && ticktes[i][0].equals(present)) {
                visited[i] = true;
                dfs(cnt + 1, ticktes[i][1], answer + " " + ticktes[i][1], ticktes);
                visited[i] = false;
            }
        }
        return;
    }
}
