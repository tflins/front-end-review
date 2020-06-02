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
    let index = randomNum(0 ,arr.length - 1)
    if (indexList.includes(index)) {
      let flag = true
      while (flag) {
        index = randomNum(0 ,arr.length - 1)
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

console.log(shuffleArr(['a', 'b', 'c', 'd', 'e', 'f']))