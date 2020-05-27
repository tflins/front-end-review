function isObject(obj) {
  return obj !== 'null' && typeof obj === 'object'
}

function isFunction(func) {
  return typeof func === 'function'
}

function defineReactive(data, key, val) {
  observer(val)
  const dep = new Dep()
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      if (Dep.target) {
        dep.addSub(Dep.target)
      }
      return val
    },
    set(newVal) {
      val = newVal
      dep.notify()
    }
  })
}

function observer(data) {
  if (!isObject(data)) return

  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key])
  })
}

function Dep() {
  this.subs = []
}

Dep.prototype.addSub = function (sub) {
  this.subs.push(sub)
}

Dep.prototype.notify = function () {
  console.log('属性变化，通知')
  this.subs.forEach(sub => {
    isFunction(sub.update) && sub.update()
  })
}

Dep.target = null

function Watcher(vm, exp, cb) {
  this.vm = vm
  this.exp = exp
  this.cb = cb
  this.value = this.get()
}

Watcher.prototype.get = function () {
  Dep.target = this
  const value = this.vm.data[this.exp]
  Dep.target = null
  return value
}

Watcher.prototype.update = function () {
  this.run()
}

Watcher.prototype.run = function () {
  const value = this.vm.data[this.exp]
  const oldValue = this.value

  if (value !== oldValue) {
    this.value = value
    this.cb.apply(this.vm, [value, oldValue])
  }
}

function Mvvm(el, data, exp) {
  this.data = data
  observer(data)

  el.innerHTML = this.data[exp]

  new Watcher(this, exp, v => {
    el.innerHTML = v
  })
}