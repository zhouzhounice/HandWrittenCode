/* 
  new 操作符做了什么？
    - 创建了一个对象
    - 使得对象的隐式原型指向了函数的显示原型
    - 改变了函数的this指向 使得this指向被创建的新对象
    - 当函数返回值为基础类型时 返回函数的this 当返回值为引用类型时 正常返回
*/
function myNew(fun,...args){
  // 创建一个新对象
  let newObj={};
  // 使得对象的隐式原型指向函数的显式原型
  if(fun.prototype !== null){
    newObj.__proto__ = fun.prototype
  }
/*   // 上面两步可以合并成一步
  let newObj = Object.create(fun.prototype) */
  // 改变函数的this 使得this指向新对象
  let res = fun.call(newObj,...args);
  // 判断函数的返回值
  if(res && (typeof res === "object" ||typeof res === "function" )){
    return res;
  }
  return newObj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function() {
  console.log(this.age);
};
let p1 = myNew(Person, "lihua", 18);
console.log(p1.name);
console.log(p1);
p1.say();
