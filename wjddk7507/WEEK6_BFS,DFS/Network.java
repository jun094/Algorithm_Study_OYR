public class Network {
    public static void main(String[] args) {
        int[][] computers = { { 1, 0, 0, 1 }, { 0, 1, 1, 0 }, { 0, 1, 1, 0 }, { 1, 1, 0, 1 } };
        int n = computers.length;
        int answer = 0;
        boolean[] visited = new boolean[n];

        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                dfs(i, computers, visited);
                answer++;
            }
        }
        System.out.println(answer);
    }

    public static boolean[] dfs(int i, int arr[][], boolean visited[]) {
        visited[i] = true;

        for (int j = 0; j < arr.length; j++) {
            if (i != j && arr[i][j] == 1 && visited[j] == false) {
                visited = dfs(j, arr, visited);
            }
        }
        return visited;
    }
}