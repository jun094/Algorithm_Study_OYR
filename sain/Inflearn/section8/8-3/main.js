console.log("main.js");

function solution(input) {
  let answer = {
    전위순회: "",
    중위순회: "",
    후위순회: "",
  };

  function binaryTree(start) {
    if (start > 7) return;
    answer.전위순회 += start + " ";
    binaryTree(start * 2);
    answer.중위순회 += start + " ";
    binaryTree(start * 2 + 1);
    answer.후위순회 += start + " ";
  }

  binaryTree(input);

  return answer;
}

const input = 1;

console.log(solution(input));
