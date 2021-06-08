# 그래프 탐색 알고리즘: DFS

### 스택 자료구조

- 선입후출

    ```java
    class Stack {
      constructor() {
        this.arr = [];
      }
      push(item) {
        this.arr.push(item);
      }
      pop() {
        return this.arr.pop();
      }
      peek() {
        return this.arr[this.arr.length - 1];
      }
    }

    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    console.log(stack.pop()); // 3
    console.log(stack.pop()); // 2
    console.log(stack.pop()); // 1
    ```

### 큐 자료구조

- 선입선출

```java
class Queue {
  constructor() {
    this.arr = [];
  }
  enQueue(item) {
    this.arr.push(item);
  }
  deQueue() {
    return this.arr.shift();
  }
}

const q = new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
console.log(q.deQueue()); // 1
console.log(q.deQueue()); // 2
console.log(q.deQueue()); // 3
```

### 재귀 함수

- 자기 자신을 다시 호출
- 무한 루프 쓸 거 아니면 종료 조건을 반드시 명시해야 함

- 팩토리얼

```java
function factorial(n) {
  if(n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
```

- 유클리드 호제법 : 최대공약수 계산

    ```java
    function gcd(n1, n2) {
      let r = n1%n2;
      if(r === 0) return r;
      return gcd(n2, r);
    }
    ```

### DFS (Depth-First Search)

- 깊이 우선 탐색, 깊이 부분을 우선적으로 탐색
- 스택 자료구조(혹은 재귀 함수)를 이용
    1. 탐색 시작 노드를 스택에 삽입하고 방문  처리
    2. 스택의 최상단 노드에 방문하지 않은 인접한 노드가 하나라도 있으면 그 노드를 스택에 넣고 방문 처리함. 방문하지 않은 노드가 없으면 스택에서 최상단 노드를 꺼냄
    3. 2번 과정을 수행할 수 없을 때까지 반복

```java
import java.util.*;

public class Solution {
    public static boolean[] visited = new boolean[9];
    public static ArrayList<ArrayList<Integer>> graph = new ArrayList<ArrayList<Integer>>();

    // DFS 함수 정의
    public static void dfs(int x) {
        // 현재 노드를 방문 처리
        visited[x] = true;
        System.out.print(x + " ");
        // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
        for (int i = 0; i < graph.get(x).size(); i++) {
            int y = graph.get(x).get(i);
            if (!visited[y])
                dfs(y);
        }
    }

    public static void main(String[] args) {

        // 그래프 초기화
        for (int i = 0; i < 9; i++) {
            graph.add(new ArrayList<Integer>());
        }

        // 노드 1에 연결된 노드 정보 저장
        graph.get(1).add(2);
        graph.get(1).add(3);
        graph.get(1).add(8);

        // 노드 2에 연결된 노드 정보 저장
        graph.get(2).add(1);
        graph.get(2).add(7);

        // 노드 3에 연결된 노드 정보 저장
        graph.get(3).add(1);
        graph.get(3).add(4);
        graph.get(3).add(5);

        // 노드 4에 연결된 노드 정보 저장
        graph.get(4).add(3);
        graph.get(4).add(5);

        // 노드 5에 연결된 노드 정보 저장
        graph.get(5).add(3);
        graph.get(5).add(4);

        // 노드 6에 연결된 노드 정보 저장
        graph.get(6).add(7);

        // 노드 7에 연결된 노드 정보 저장
        graph.get(7).add(2);
        graph.get(7).add(6);
        graph.get(7).add(8);

        // 노드 8에 연결된 노드 정보 저장
        graph.get(8).add(1);
        graph.get(8).add(7);

        dfs(1);
    }
}
```

### BFS (Breadth-First Search)

- 너비 우선 탐색, 그래프에서 가까운 노드부터 우선적으로 탐색
- 큐 자료구조
    1. 탐색 시작 노드를 큐에 삽입하고 방문 처리 함.
    2. 큐에서 노드를 꺼낸 뒤 해당 노드의 인접 노드 중에서 방문하지 않은 노드를 모두 큐에 삽입하고 방문 처리 함
    3. 2 번 과정을 수행할 수 없을 때까지 반복

```java
import java.util.*;

public class Solution {
    public static boolean[] visited = new boolean[9];
    public static ArrayList<ArrayList<Integer>> graph = new ArrayList<ArrayList<Integer>>();

    // BFS 함수 정의
    public static void bfs(int start) {
        Queue<Integer> q = new LinkedList<>();
        q.offer(start);
        // 현재 노드를 방문 처리
        visited[start] = true;
        // 큐가 빌 때까지 반복
        while (!q.isEmpty()) {
            int x = q.poll();
            System.out.print(x + " ");
            // 해당 원소와 연결된, 아직 방문하지 않은 원소들을 큐에 삽입
            for (int i = 0; i < graph.get(x).size(); i++) {
                int y = graph.get(x).get(i);
                if (!visited[y]) {
                    q.offer(y);
                    visited[y] = true;
                }
            }
        }
    }

    public static void main(String[] args) {

        // 그래프 초기화
        for (int i = 0; i < 9; i++) {
            graph.add(new ArrayList<Integer>());
        }

        // 노드 1에 연결된 노드 정보 저장
        graph.get(1).add(2);
        graph.get(1).add(3);
        graph.get(1).add(8);

        // 노드 2에 연결된 노드 정보 저장
        graph.get(2).add(1);
        graph.get(2).add(7);

        // 노드 3에 연결된 노드 정보 저장
        graph.get(3).add(1);
        graph.get(3).add(4);
        graph.get(3).add(5);

        // 노드 4에 연결된 노드 정보 저장
        graph.get(4).add(3);
        graph.get(4).add(5);

        // 노드 5에 연결된 노드 정보 저장
        graph.get(5).add(3);
        graph.get(5).add(4);

        // 노드 6에 연결된 노드 정보 저장
        graph.get(6).add(7);

        // 노드 7에 연결된 노드 정보 저장
        graph.get(7).add(2);
        graph.get(7).add(6);
        graph.get(7).add(8);

        // 노드 8에 연결된 노드 정보 저장
        graph.get(8).add(1);
        graph.get(8).add(7);

        bfs(1);
    }
}
```

# <문제>

### 음료수 얼려 먹기

```java
import java.util.*;

public class Solution {
    static int arr[][] = { { 0, 0, 1, 1, 0 }, { 0, 0, 0, 1, 1 }, { 1, 1, 1, 1, 1 }, { 0, 0, 0, 0, 0 } };
    static int n = arr.length;
    static int m = arr[0].length;

    public static void main(String[] args) {
        int result = 0;

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {
                if (dfs(i, j)) {
                    result += 1;
                }
            }
        }
        System.out.println("result: " + result);
    }

    public static boolean dfs(int x, int y) {
        if (x <= -1 || x >= n || y <= -1 || y >= m) {
            return false;
        }
        if (arr[x][y] == 0) {
            arr[x][y] = 1;
            dfs(x - 1, y);
            dfs(x, y - 1);
            dfs(x + 1, y);
            dfs(x, y + 1);
            return true;
        }
        return false;
    }
}
```

### 미로 탈출

```java
import java.util.*;

public class Solution {
    public static int n, m;
		// n, m 값에 딱 맞춰 배열을 만들면 이동 좌표때문에 에러 발생
    public static int[][] graph = new int[201][201];
    // 이동할 네 가지 방향 정의 (상, 하, 좌, 우)
    public static int dx[] = { -1, 1, 0, 0 };
    public static int dy[] = { 0, 0, -1, 1 };

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // N, M을 공백을 기준으로 구분하여 입력 받기
        System.out.print("n 입력: ");
        n = sc.nextInt();
        System.out.print("m 입력: ");
        m = sc.nextInt();
        sc.nextLine(); // 버퍼 지우기

        // 2차원 리스트의 맵 정보 입력 받기
        for (int i = 0; i < n; i++) {
            String str = sc.nextLine();
            for (int j = 0; j < m; j++) {
                graph[i][j] = str.charAt(j) - '0';
            }
        }

        // BFS를 수행한 결과 출력
        System.out.println(bfs(0, 0));
    }

    public static int bfs(int x, int y) {
        // 큐(Queue) 구현을 위해 queue 라이브러리 사용
        Queue<Node> q = new LinkedList<>();
        q.offer(new Node(x, y));
        // 큐가 빌 때까지 반복하기
        while (!q.isEmpty()) {
            Node node = q.poll();
            x = node.getX();
            y = node.getY();

            // 현재 위치에서 4가지 방향으로의 위치 확인
            for (int i = 0; i < 4; i++) {
                int nx = x + dx[i];
                int ny = y + dy[i];
                // 미로 찾기 공간을 벗어난 경우 무시
                if (nx < 0 || nx >= n || ny < 0 || ny >= m)
                    continue;
                // 벽인 경우 무시
                if (graph[nx][ny] == 0)
                    continue;
                // 해당 노드를 처음 방문하는 경우에만 최단 거리 기록
                if (graph[nx][ny] == 1) {
                    graph[nx][ny] = graph[x][y] + 1;
                    q.offer(new Node(nx, ny));
                }
            }
        }
        // 가장 오른쪽 아래까지의 최단 거리 반환
        return graph[n - 1][m - 1];
    }
}

class Node {

    private int x;
    private int y;

    public Node(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() {
        return this.x;
    }

    public int getY() {
        return this.y;
    }
}
```