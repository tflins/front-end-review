const randomArr = require('./randomArr')

/**
 * 实现一个冒泡排序
 */
function bubbleSrot(list) {
  for (let i = 0, len = list.length; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        let temp = list[j + 1]
        list[j + 1] = list[j]
        list[j] = temp
      }
    }
  }
}

// 测试
const list = randomArr()

console.log('原数组', list)

bubbleSrot(list)

console.log('排序后', list)
