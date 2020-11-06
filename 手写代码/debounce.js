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

// 精简版
function debounce2(fn, wait = 2000) {
  let timer = null
  return function() {
    if (timer) clearTimeout(timer)
    timer = setTimeout(fn, wait)
  }
}

// 2. 立即执行版: 函数触发后立即执行，m 秒后不触发才能继续执行
function debounce3(fn, wait = 2000) {
  let timer = null
  return function() {
    if (timer) clearTimeout(timer)
    const callNow = !timer
    timer = setTimeout(fn, wait)
    if (callNow) fn()
  }
}

/**
 * 相关知识:
 * 1. 函数防抖是指在一段时间内, 不断执行这个函数, 则只有最后一次的执行生效
 */