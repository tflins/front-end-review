function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * 产生长度为 len 的数组，数组中的值为 [0 , maxNum] 之间
 *
 * @param {number} [len=100]
 * @param {number} [maxNum=100]
 * @returns {array}
 */
function randomArr(len = 100, maxNum = 100) {
  const arr = []
  for (let i = 0; i < len; i++) {
    let num = randomNum(0, maxNum)
    arr.push(num)
  }
  return arr
}

module.exports = { randomArr, randomNum }
