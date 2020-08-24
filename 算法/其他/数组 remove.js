/**
 * 实现一个remove方法，实现移除数组中等于item的值，不直接修改原数组，返回一个新的数组，例如remove([1, 2, 3, 4, 4 ,5], 4)
 */

 // 方法一： 遍历
function remove(arr, value) {
  const result = []
  arr.forEach(v => {
    if (v !== value) result.push(v)
  })
  return result
}

// 方法2：利用 Array.prototype.filter
function remove2(arr, value) {
  return arr.filter(i => i !== value)
}

console.log(remove2([1, 2, 1, 3, 4, 5, 6], 1))
