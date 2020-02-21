/**实现一个 apply 函数*/
Function.prototype.apply2 = function(content = window, args = []) {
  content.func = this

  let result = null
  if (args.length) {
    console.log(args)
    result = content.func(...args)
  } else {
    result = content.func()
  }

  delete content.func
  return result
}

/**
 * 相关知识:
 * 1. apply 的作用是改变函数的作用域, 指定函数一个 this 对象和一个参数数组, 并返回执行结果
 * 2. 在 function 的构造函数 Function 的原型对象中添加方法, 扩展 function 的方法
 * 3. 将该函数设为传入对象的属性
 * 4. 执行函数, 保存执行结果
 * 5. 删除函数, 返回执行结果
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

console.log(test.apply2(person, ['lyf', 30]))
