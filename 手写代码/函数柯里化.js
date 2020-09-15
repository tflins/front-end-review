/**
 * 函数柯里化：提前接收部分参数，延迟执行，不立即输出结果，返回一个接收剩余参数的函数
 */
const add = a => b => c => a + b + c
console.log(add(1)(2)(3))