public class TargetNumber {
    public static void main(String[] args) {
        int numbers[] = { 1, 1, 1, 1, 1 };
        int target = 3;

        int answer = dfs(numbers, target, 0, 0);
        System.out.println(answer);
    }

    public static int dfs(int[] numbers, int target, int idx, int sum) {
        int answer = 0;

        if (idx >= numbers.length) {
            if (sum == target)
                return 1;
            return 0;
        }
        answer += dfs(numbers, target, idx + 1, sum + numbers[idx]);
        answer += dfs(numbers, target, idx + 1, sum - numbers[idx]);

        return answer;
    }
}