/**实现一个防抖函数 */

// 1. 非立即执行版： 触发后 m 秒后在执行这个函数，若在 m 秒内重新触发执行函数则重新计时
function debounce(fn, delay) {
  if (!fn instanceof Function) {
    throw Error('not a function')
  }

  let timer = null
  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

/**
 * 相关知识:
 * 1. 函数防抖是指在一段时间内, 不断执行这个函数, 则只有最后一次的执行生效
 */