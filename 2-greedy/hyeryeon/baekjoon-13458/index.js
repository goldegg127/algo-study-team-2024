// 시험 감독 - 감독관의 최소 수 구하기 , 총감독은 오직 1명 
const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const examCount = Number(input[0]); // 시험장의 개수
const studentsInExam = input[1].split(' ').map(Number); // 각시험장의 응시자 수
const [B, C] = input[2].split(' ').map(Number); // 총감과 부감이 감시할 수 있는 인원

let total = 0;

for (let i = 0; i < examCount; i++) {
    total += 1;
    const leftStudentsInExam = studentsInExam[i] - B;

    if (leftStudentsInExam > 0) {
        total += Math.ceil(leftStudentsInExam / C);
    }
}

console.log(total);
