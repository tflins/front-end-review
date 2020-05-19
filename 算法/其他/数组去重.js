const randomArr = require('../utils/tools').randomArr

const arr = randomArr(10, 10)

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

// 第四种方法： 利用 indexOf 找出数组中当前值的第一个元素，若相等则说明是第一个出现的元素，推入返回的数组中
function uniqueArr4(arr) {
  const result = []
  for (let i = 0, len = arr.length; i < len; i++) {
    const curr = arr[i]
    const firstIndex = arr.indexOf(curr)
    if (firstIndex === i) {
      result.push(curr)
      continue
    }
  }
  return result
}

console.time('start')
console.log('去重后', uniqueArr4(arr))
console.timeEnd('start')
