/**实现一个防抖函数 */
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