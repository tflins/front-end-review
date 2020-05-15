const randomArr = require('../utils/tools').randomArr

const arr = randomArr(90000, 10)

console.log('原数组', arr)

// 第一种方法：双重循环 依次比较 设置标志位
function uniqueArr(arr) {
  const result = []
  for (let i = 0, len = arr.length; i < len; i++) {
    let isUnique = true
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        isUnique = false
        break
      }
    }
    if (isUnique) result.push(arr[i])
  }
  return result
}

// 第二种方式
function uniqueArr2(arr) {
  return [...new Set(arr)]
}

// 第三种方式
function uniqueArr3(arr) {
  return Array.from(new Set(arr))
}

console.time('start')
console.log('去重后', uniqueArr(arr))
console.timeEnd('start')
