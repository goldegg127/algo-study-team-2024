const path = require("path");
const filePath = path.join(__dirname, "14467.txt");

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const len = input.shift();

let answer = 0;

let map = new Map();

for (let i = 0; i < len; i++) {
  const arr = input[i].split(" ").map((item) => Number(item));
  if (map.has(arr[0]) && map.get(arr[0]) !== arr[1]) {
    answer += 1;
  }
  map.set(arr[0], arr[1]);
}
console.log(answer);
