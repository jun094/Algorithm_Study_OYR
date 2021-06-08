import java.util.*;

public class Parenthesis {
    public static void main(String[] args) {
        String p = "()))((()";
        String answer = "";
        answer = convert(p);
        System.out.println(answer);
    }

    public static String convert(String p) {
        if (p.length() == 0)
            return "";

        int idx = divide(p);

        String u = p.substring(0, idx);
        String v = p.substring(idx, p.length());

        if (check(u)) {
            return u + convert(v);
        } else {
            String tmp = '(' + convert(v) + ')';
            u = u.substring(1, u.length() - 1);

            u = reverse(u);
            return tmp + u;
        }
    }

    public static String reverse(String str) {
        String tmp = "";
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == '(')
                tmp += ')';
            else
                tmp += '(';
        }
        return tmp;
    }

    public static int divide(String str) {
        int num1 = 0, num2 = 0;
        int idx = 0;
        for (; idx < str.length(); idx++) {
            if (str.charAt(idx) == '(')
                num1++;
            else
                num2++;

            if (num1 == num2)
                return idx + 1;

        }
        return idx;
    }

    public static boolean check(String str) {
        Stack<Character> st = new Stack();
        for (int i = 0; i < str.length(); i++) {

            if (str.charAt(i) == '(')
                st.push(str.charAt(i));
            else {
                if (st.isEmpty())
                    return false;
                else if (st.pop() != '(')
                    return false;
            }
        }

        return true;
    }
}