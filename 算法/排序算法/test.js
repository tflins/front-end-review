/**
 * 测试模块
 */
const randomArr = require('./randomArr')

const test = srotFunc => {
  const arr = randomArr()
  const srotArr = srotFunc(arr)

  console.log('原数组', arr)
  console.log('排序后', srotArr)
}

module.exports = test
