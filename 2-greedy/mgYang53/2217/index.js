const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

// N: 로프의 개수, ropes: 로프의 최대 무게 배열
const N = Number(input.shift());
const ropes = input.map(Number).sort((a, b) => b - a);

let maxWeight = 0;

for (let i = 0; i < N; i++) {
  // 이용할 로프 중 가장 약한 로프 무게 * 개수
  const weight = ropes[i] * (i + 1);

  maxWeight = Math.max(weight, maxWeight);
}

console.log(maxWeight);
