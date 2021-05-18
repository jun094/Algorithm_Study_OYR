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

### BFS (Breadth-First Search)

- 너비 우선 탐색, 그래프에서 가까운 노드부터 우선적으로 탐색
- 큐 자료구조
    1. 탐색 시작 노드를 큐에 삽입하고 방문 처리 함.
    2. 큐에서 노드를 꺼낸 뒤 해당 노드의 인접 노드 중에서 방문하지 않은 노드를 모두 큐에 삽입하고 방문 처리 함
    3. 2 번 과정을 수행할 수 없을 때까지 반복