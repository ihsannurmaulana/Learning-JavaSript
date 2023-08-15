function solution(n1, n2) {
  let deret = 6;
  let result = [n1, n2];

  for (let i = 0; i < deret - 2; i++) {
    result.push(result[i] + result[i + 1]);
  }

  return result;
}

console.log(solution(-1, 2));
