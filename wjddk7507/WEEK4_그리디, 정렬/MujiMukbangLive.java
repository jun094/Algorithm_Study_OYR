// 그리디_무지의먹방라이브
// https://programmers.co.kr/learn/courses/30/lessons/42891

import java.util.*;

public class MujiMukbangLive {
    public static void main(String[] args) {
        int[] food_times = { 4, 2, 3, 6, 7, 1, 5, 8 };
        long k = 16;
        int result = solution(food_times, k);
        System.out.println(result);
    }

    public static int solution(int[] food_times, long k) {
        long sum = 0;
        for (int j : food_times) {
            sum += j;
        }
        if (sum <= k)
            return -1;

        PriorityQueue<Food> pq = new PriorityQueue<>();
        for (int i = 0; i < food_times.length; i++) {
            pq.offer(new Food(food_times[i], i + 1));
        }
        sum = 0;
        long prev_time = 0;
        long len = food_times.length;

        while (sum + (pq.peek().time - prev_time) * len <= k) {
            int now = pq.poll().time;
            sum += (now - prev_time) * len;
            len -= 1;
            prev_time = now;
        }

        ArrayList<Food> list = new ArrayList<>();
        while (!pq.isEmpty()) {
            list.add(pq.poll());
        }

        Collections.sort(list, new Comparator<Food>() {
            @Override
            public int compare(Food a, Food b) {
                return Integer.compare(a.idx, b.idx);
            }
        });

        return list.get((int) ((k - sum) % len)).idx;
    }
}

class Food implements Comparable<Food> {
    int time;
    int idx;

    Food(int time, int idx) {
        this.time = time;
        this.idx = idx;
    }

    @Override
    public int compareTo(Food f) {
        return this.time - f.time;
    }
}