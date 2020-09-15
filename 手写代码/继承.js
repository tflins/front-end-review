/**
 * 利用原型继承：子类构造函数的原型对象指向父类的实例
 */
function Person(name, age) {
  this.name = name
  this.age = age
  this.type = '人族'
}
Person.prototype.say = function() {
  console.log(`hi i am ${this.name}, i am ${this.age} years old.`)
}

function Student(name, age, score) {
  this.name = name
  this.age = age
  this.score = score
}
Student.prototype = new Person()
Student.prototype.learn = function() {
  console.log(`我要考 ${this.score} 分`)
}


const s1 = new Student('谭丰林', 22, 100)
s1.say()
s1.learn()
console.log(s1.type)

const p1 = new Person('古乐天', 50)
p1.say()

