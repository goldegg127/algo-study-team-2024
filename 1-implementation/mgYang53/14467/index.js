const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift()); // 관찰 횟수
const cows = new Map(); // 각 소의 위치 Map
let answer = 0; // 소의 움직인 총 횟수

for (let i = 0; i < N; i++) {
  const [cowNum, location] = input[i].split(" ");

  if (!cows.has(cowNum)) {
    // 저장된 소의 위치 없을 때
    cows.set(cowNum, location);
  } else {
    // 저장된 소의 위치 있을 때
    if (cows.get(cowNum) !== location) {
      // 저장된 소의 위치가 변했을 때
      cows.set(cowNum, location);
      answer++;
    }
  }
}

console.log(answer);
