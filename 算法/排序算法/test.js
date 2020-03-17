/**
 * 测试模块
 */
const randomArr = require('./randomArr')

/**
 * 
 * @param {Function} srotFunc 待测试的排序方法
 * 排序方法第一个参数必须是待排序的 Array
 */
const test = srotFunc => {
  const arr = randomArr()
  const srotArr = srotFunc(arr)

  console.log('原数组', arr)
  console.log('排序后', srotArr)
}

module.exports = test
