// 정렬_실패율
// https://programmers.co.kr/learn/courses/30/lessons/42889#

import java.util.*;

public class failureLate {
    public static void main(String[] args) {
        int N = 5;
        int[] stages = { 2, 1, 2, 6, 2, 4, 3, 3 };
        int result[] = solution(N, stages);
        for (int i : result) {
            System.out.print(i + " ");
        }
    }

    public static int[] solution(int N, int[] stages) {
        int[] answer;
        answer = new int[N];
        HashMap map = new HashMap<Integer, Double>();

        for (int i = 1; i <= N; i++) {
            int challenge = 0;
            int fail = 0;
            for (int j = 0; j < stages.length; j++) {
                if (i <= stages[j])
                    challenge++;
                if (i == stages[j])
                    fail++;
            }
            map.put(i, challenge == 0 ? 0 : (double) fail / challenge);
        }

        List<Map.Entry<Integer, Double>> entries = new LinkedList<>(map.entrySet());
        Collections.sort(entries, (o1, o2) -> o2.getValue().compareTo(o1.getValue()));
        LinkedHashMap<Integer, Double> result = new LinkedHashMap<>();
        for (Map.Entry<Integer, Double> entry : entries) {
            result.put(entry.getKey(), entry.getValue());
        }

        int i = 0;
        for (Map.Entry<Integer, Double> entry : result.entrySet()) {
            answer[i] = entry.getKey();
            i++;
        }
        return answer;
    }
}