/**实现一个 call 函数 */
Function.prototype.call2 = function(content = window, ...args) {
  content.func = this

  let result = content.func(...args)
  delete content.func

  return result
}

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
