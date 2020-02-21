/**实现一个 new 操作符 */
function New(func, ...args) {
  const obj = {}
  if (func.protoType) {
    obj.__proto__ = func.protoType
  }

  const result = func.apply(obj, args)

  return result instanceof Object ? result : obj
}

/**
 * 相关知识点:
 * 1. new 操作符可以把构造函数实例化成一个对象
 * 2. 创建一个空对象
 * 3. 将这个对象的隐式原型执行构造函数的显式原型
 * 4. 改变构造函数的作用域, 将它的 this 指向刚才创建的空对象, 并执行构造函数中的代码
 * 5. 构造函数如果有返回值, 有两种情况: 如果返回值是原始值, 则这个返回值没有任何作用, 不会被返回; 如果返回引用类型, 则这个返回值可以正常返回, 会导致 new 操作符无效.
 *    所以构造函数尽量不要有返回值
 * 6. 判断改变了 this 指向的构造函数的返回值, 如果为引用类型, 则直接执行返回结果; 如果为原始值, 则返回刚才创建的空对象
 */

// 测试
function Person(name, age) {
  this.name = name
  this.age = age
  return name
}

const p1 = New(Person, 'tflin', 23)

console.log(p1)
