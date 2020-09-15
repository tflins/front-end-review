/**
 * 洗牌算法，将一个数组顺序随机打乱
 * 不改变原数组，返回新数组
 */
const randomArr = require('../utils/tools').randomArr

const arr = randomArr(10, 10)

// 取 [min, max] 区间的随机整数
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * 洗牌算法1：随机索引列表，重复索引重新取索引
 * @param {*} arr
 */
function shuffleArr(arr) {
  const indexList = []
  const result = []

  arr.forEach((v, i) => {
    let index = randomNum(0, arr.length - 1)
    if (indexList.includes(index)) {
      let flag = true
      while (flag) {
        index = randomNum(0, arr.length - 1)
        if (!indexList.includes(index)) {
          flag = false
        }
      }
    }
    indexList.push(index)
    result.push(arr[index])
  })
  return result
}

/**
 * 洗牌算法2：原数组随机取值 push 后，删除。循环至原数组长度为 0
 * @param {*} arr
 */
function shuffleArr2(arr) {
  const tempArr = [...arr]
  const result = []
  while (tempArr.length) {
    const index = randomNum(0, tempArr.length - 1)
    result.push(tempArr[index])
    tempArr.splice(index, 1)
  }
  return result
}

/**
 * 洗牌算法3：随机置换算法
 * @param {*} arr 
 */
function shuffleArr3(arr) {
  const list = arr.slice(0)
  for (let i = 0, len = list.length; i < len; i++) {
    const randomIndex = randomNum(0, arr.length - i - 1)

    ;[list[i], list[randomIndex]] = [list[randomIndex], list[i]]
  }
  return list
}

console.log(shuffleArr3(['a', 'b', 'c', 'd', 'e', 'f']))
