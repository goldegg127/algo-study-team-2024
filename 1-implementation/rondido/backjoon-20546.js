//준현이의 경우 자산과 주가 같은 순간 살 수 있는 최대의 주식을 산다.
// 3일 연속 가격이 전일 대비 하락은 주식은 무조건 가격이 상승한다고 가정
// 전일과 오늘이 같으면 하락것이 아니다.
//3일 연속 가격이 전일 대비 상승하는 주식은 다음날 무조건 가격이 하락한다고 가정한다. 따라서 현재 소유한 주식의 가격이 3일째 상승한다면, 전량 매도한다.
const path = require("path");
const filePath = path.join(__dirname, "20546.txt");

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const money = parseInt(input[0]);

const num = input[1].split(" ").map((item) => +item);

const junNum = junCalculate(money, num);
const seungNum = seungCalculate(money, num);

function junCalculate(money, arr) {
  let acc = 0;
  const accNum = arr[arr.length - 1];

  for (let i = 0; i < arr.length; i++) {
    if (money >= parseInt(arr[i])) {
      acc += Math.floor(money / arr[i]);
      money = money % arr[i];
    }
  }
  return money + accNum * acc;
}

function seungCalculate(money, arr) {
  let acc = 0;
  const accNum = arr[arr.length - 1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 3] < arr[i - 2] && arr[i - 2] < arr[i - 1]) {
      // 3일연속 하락시 전량 매도
      money += acc * arr[i];
      acc = 0;
      //주가 상승
    } else if (arr[i - 3] > arr[i - 2] && arr[i - 2] > arr[i - 1]) {
      // 3일연속 상승시 전량 매수
      if (money >= arr[i]) {
        acc += Math.floor(money / arr[i]);
        money = money % arr[i];
      }
    }
  }
  return money + accNum * acc;
}

if (junNum > seungNum) console.log("BNP");
else if (seungNum > junNum) console.log("TIMING");
else console.log("SAMESAME");
