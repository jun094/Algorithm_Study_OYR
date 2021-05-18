import java.util.Arrays;
import java.util.Collections;

public class Solution {
    public static void main(String[] args) {
        int n = 5;
        int k = 3;
        Integer a[] = { 1, 2, 5, 4, 3 };
        Integer b[] = { 5, 5, 6, 6, 5 };

        Arrays.sort(a);
        Arrays.sort(b, Collections.reverseOrder());
        for (int i = 0; i < k; i++) {
            if (a[i] < b[i]) {
                int temp = a[i];
                a[i] = b[i];
                b[i] = temp;
            } else
                break;
        }
        int sum = 0;
        for (int i = 0; i < n; i++) {
            sum += a[i];
        }
        System.out.println(sum);
    }
}
