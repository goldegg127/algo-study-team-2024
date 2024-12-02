const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const testerPerClass = input[1].split(" ").map(Number); // 각 시험장에 있는 응시자 수
const [B, C] = input[2].split(" ").map(Number); // B: 총감독관 감시 응시생 수, C: 부감독관 감시 응시생 수

let count = 0;

for (let tester of testerPerClass) {
  // 총감독관 배치
  tester -= B;
  count++;

  // 부감독관 배치
  if (tester > 0) {
    count += Math.ceil(tester / C);
  }
}

console.log(count);
