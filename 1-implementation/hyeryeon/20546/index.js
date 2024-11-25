// "BNP" 
//     주식을 살 수 있으면 최대한 많이 산다.
//     한 번 산 주식은 절대 팔지 않는다.
// "TIMING"
//     주식 가격이 3일 연속 상승하면 보유 주식을 전부 판다.
//     주식 가격이 3일 연속 하락하면 보유 현금으로 최대한 많이 산다.
// 마지막  : 자산 = 남은 현금 + (보유 주식 수 × 마지막 날 주식 가격)
 
const input = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n');

const cash = Number(input[0]); // 초기 현금
const prices = input[1].split(' ').map(Number); // 14일간의 주식 가격

// BNP 
function calculateBNP(cash, prices) {
    let shares = 0; // 보유 주식 수
    let money = cash; // 남은 현금

    for (let price of prices) {
        const canBuyShares = Math.floor(money / price); // 구매 가능한 주식 수
        shares += canBuyShares; // 주식 추가
        money -= canBuyShares * price; // 사용된 현금 차감
    }

    // 마지막 자산 계산
    return money + shares * prices[prices.length - 1];
}

// TIMING 
function calculateTIMING(cash, prices) {
    let shares = 0; // 보유 주식 수
    let money = cash; // 남은 현금

    let upCount = 0; 
    let downCount = 0; 

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) { // 전보다 상승
            upCount++;
            downCount = 0;
        } else if (prices[i] < prices[i - 1]) { // 전보다 하락
            downCount++;
            upCount = 0;
        } else { // 가격 변동 없음
            upCount = 0;
            downCount = 0;
        }

        // 3일 연속 상승 → 판매
        if (upCount >= 3 && shares > 0) {
            money += shares * prices[i]; // 주식을 모두 팔아 현금 추가
            shares = 0;
        }

        // 3일 연속 하락 → 구매
        if (downCount >= 3) {
            const canBuyShares = Math.floor(money / prices[i]); // 매수 가능한 주식 수
            shares += canBuyShares; // 주식 추가
            money -= canBuyShares * prices[i]; // 사용된 현금 차감
        }
    }

    // 마지막 자산 계산
    return money + shares * prices[prices.length - 1];
}

const bnpAssets = calculateBNP(cash, prices); // BNP  결과
const timingAssets = calculateTIMING(cash, prices); // TIMING  결과

if (bnpAssets > timingAssets) {
    console.log("BNP");
} else if (bnpAssets < timingAssets) {
    console.log("TIMING");
} else {
    console.log("SAMESAME");
}
