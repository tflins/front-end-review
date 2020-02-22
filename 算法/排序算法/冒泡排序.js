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

/**
 * 相关知识:
 * 1. 冒泡排序时间复杂度 O(n^2)，空间复杂度 O(1)
 * 2. 其核心思想遍历数组，比较前一个元素和后一个元素的大小，若前一个元素比后一个元素大，则两两交换
 * 3. 每次遍历一次，都会得到最大（最小）的数，也就是最后一个数
 */

// 测试
const list = randomArr()

console.log('原数组', list)

bubbleSrot(list)

console.log('排序后', list)
