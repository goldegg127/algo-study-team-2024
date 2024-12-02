const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number);

let remainingMoney = K;
let count = 0;

//큰 돈 부터
for (let coin of coins.reverse()) {
    if (remainingMoney === 0) break;
    if (coin <= remainingMoney) {
    count += Math.floor(remainingMoney / coin);
    remainingMoney %= coin;
}
}
console.log(count);
