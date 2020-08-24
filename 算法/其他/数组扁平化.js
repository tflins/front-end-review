/**
 * 数组扁平化：[1, 2, 3, [4, 5, [6]]] => [1, 2 ,3, 4 ,5, 6]
 */


// 方法一：遍历递归
function flatten(arr) {
  let result = []
  arr.forEach(v => {
    if (!Array.isArray(v)) result.push(v)
    else result = [...result, ...flatten(v)]
  })
  return result
}

// 方法二：利用 Array.prototype.toString 缺点：数组的值只能是数字或字符串
function flatten2(arr) {
  return arr.toString().split(',').map(v => +v)
}

// 方法二：利用 Array.prototype.join 缺点：数组的值只能是数字或字符串 和 方法二类似
function flatten2(arr) {
  return arr.join().split(',').map(v => +v)
}


console.log(flatten2([1, 2, 3, [3.1, 3.2], 4, 5, [6, 7, [8, 9, 10]]]))
