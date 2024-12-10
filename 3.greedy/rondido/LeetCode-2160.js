/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  const sortNum = num
    .toString()
    .split("")
    .sort((a, b) => a - b);
  let min = [];

  for (let i = 1; i < sortNum.length; i++) {
    min.push(sortNum[i - 1]);
    if (Number(min[0]) >= Number(sortNum[i])) {
      min.push(sortNum[i]);
    }
  }
  const a1 = min[0] + sortNum[2];
  const a2 = min[1] + sortNum[3];

  return Number(a1) + Number(a2);
};
