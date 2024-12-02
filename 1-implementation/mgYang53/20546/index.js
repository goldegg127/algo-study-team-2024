const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const money = Number(input[0]); // 현금
const stocks = input[1].split(" ").map(Number); // 주가 목록

let answerMsg = "";

// 각 투자자의 현금과 주식 개수 초기화
let jh = { money, cnt: 0 },
  sm = { money, cnt: 0 };

// BNP 전략
function BNP(buyer, stocks) {
  for (const price of stocks) {
    if (buyer.money >= price) {
      buyer.cnt += Math.floor(buyer.money / price);
      buyer.money = buyer.money % price;
    }
  }
}

// 33 매매법
function TIMING(buyer, stocks) {
  let high_cnt = 0,
    low_cnt = 0;
  for (let i = 1; i < stocks.length; i++) {
    if (stocks[i] > stocks[i - 1]) {
      // 전날 대비 주가 상승
      high_cnt++;
      low_cnt = 0;
    } else if (stocks[i] < stocks[i - 1]) {
      // 전날 대비 주가 하락
      low_cnt++;
      high_cnt = 0;
    } else {
      // 전날 대비 주가 동일
      low_cnt = 0;
      high_cnt = 0;
    }

    if (buyer.money >= stocks[i] && low_cnt >= 3) {
      buyer.cnt += Math.floor(buyer.money / stocks[i]);
      buyer.money = buyer.money % stocks[i];
    } else if (high_cnt >= 3) {
      buyer.money += buyer.cnt * stocks[i];
      buyer.cnt = 0;
    }
  }
}

// 투자자의 총 현금 조회 함수 (마지막 주가 * 보유한 주식 개수 + 보유한 현금)
function getTotalMoney(buyer, lastPrice) {
  return buyer.cnt * lastPrice + buyer.money;
}

BNP(jh, stocks);
TIMING(sm, stocks);

const jh_total = getTotalMoney(jh, stocks[stocks.length - 1]);
const sm_total = getTotalMoney(sm, stocks[stocks.length - 1]);

if (jh_total > sm_total) {
  answerMsg = "BNP";
} else if (jh_total < sm_total) {
  answerMsg = "TIMING";
} else {
  answerMsg = "SAMESAME";
}

console.log(answerMsg);
