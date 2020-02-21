/**实现一个 call 函数 */
Function.prototype.call2 = function(content = window, ...args) {
  content.func = this

  let result = content.func(...args)
  delete content.func

  return result
}

/**
 * 相关知识
 * 1. call 与 apply 类似，可以改变函数的执行环境，给函数指定一个 this 指向
 * 2. call 和 apply 第一个参数都是指定的 this , call 其余参数为传入的参数，apply 第二个参数为一个参数数组
 * 3. 实现原理与 apply 类似
 */

// 测试
function test(name, age) {
  console.log(`my name is ${name}, i am ${age} years old !`)
  console.log(` ${this.name} is ${this.age} years old !`)
}

let person = {
  name: 'tflin',
  age: 23
}

console.log(test.call2(person, 'lyf', 30))
