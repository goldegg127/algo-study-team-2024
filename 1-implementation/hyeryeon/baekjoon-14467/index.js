//14467-소가 길을 건너간 이유

const input = require('fs')
    .readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(line => line.split(' ').map(Number)); 

const records = input.slice(1);  

let crossings = 0;
const cowPositions = {};

for (const [cow, position] of records) {
    if (cow in cowPositions) {
        if (cowPositions[cow] !== position) {
            crossings++;
        }
    } 
    cowPositions[cow] = position;
}

console.log(crossings);
