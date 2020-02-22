/**
 * 实现一个 bind 方法
 */
Function.prototype.bind2 = function(content, ...args) {
  if (typeof this !== 'function') {
    throw Error('not a function')
  }
  const _this = this
  return function() {
    // _this.apply(content, args)
    content.func = _this
    let result = null
    if (args.length) {
      result = content.func(...args)
    } else {
      result = content.func()
    }

    delete content.func
    return result
  }
}

/**
 * 相关知识：
 * 1. bind 方法和 call、apply 方法类型，也是改变函数的 this 指向
 * 2. bind 方法的传参和 call 的类似，第一个为指定的 this，其余为传入的参数
 * 3. bind 方法与 call、apply 不同的是，它不会执行里面的代码，而是返回一个改变了 this 指向的新函数
 */

// 测试
const obj = {
  name: 'tfl',
  age: 23
}
function test(name, age) {
  console.log(this.name, this.age)
  console.log(name, age)
}

const fn = test.bind2(obj, 'lxy', 22)
fn()
