function randomNum(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function randomArr(len = 15, maxNum = 100) {
  const arr = []
  for (let i = 0; i < len; i++) {
    let num = randomNum(0, maxNum)
    arr.push(num)
  }
  return arr
}

module.exports = randomArr
