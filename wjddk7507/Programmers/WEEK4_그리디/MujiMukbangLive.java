// 그리디_무지의먹방라이브
// https://programmers.co.kr/learn/courses/30/lessons/42891

public class MujiMukbangLive {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}

/*
 * import java.util.*;
 * 
 * class Solution { public int solution(int[] food_times, long k) { int idx =
 * -1; long sum = 0; for(int j : food_times) { sum += j; } if(sum <= k) return
 * -1;
 * 
 * for(long i = 0 ; i <= k ; i ++) { idx = (idx+1) % food_times.length;
 * while(food_times[idx] == 0) { idx++; idx %= food_times.length; } if(i == k)
 * break; food_times[idx] -= 1; }
 * 
 * return (idx+1)%food_times.length; } }
 */