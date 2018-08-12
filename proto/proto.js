"use strict";

function Person() {

}

var person = new Person();
person.name = "dongchunxu";
console.info(person.name);


//在这个例子中，Person是一个构造函数，person是一个实例对象

//每个函数都有一个prototype属性，且只有函数才能有
Person.prototype.sayName = function () {
    console.info("hello");
};

var person1 = new Person();
var person2 = new Person();
person1.sayName();
person2.sayName();

//函数的prototype属性指向的对象到底是什么。他是调用构造函数Person创建的实例对象的原型
console.info(person1.__proto__ === Person.prototype);

/**
 * 什么是原型？
 * 每一个JavaScript对象（null除外）在创建的时候就会与之关联另外一个对象。这个对象就是原型，每一个对象都会从原型"继承"属性
 * 每个JavaScript对象都具有一个属性__proto__,这个属性会指向改对象的原型
 * */


//原型也可以指向构造函数和实例吗？指向构造函数是可以的，但是不能指向实例，因为一个构造函数可以有无数个实例
//每个原型都有一个constructor属性指向关联的构造函数。
console.info(Person === Person.prototype.constructor);

//ES5里有一个方法可以获得对象的原型
console.info(Object.getPrototypeOf(person1) === Person.prototype);


////实例与原型
function Animal() {

}

Animal.prototype.name = "cat";

var animal = new Animal();
animal.name = "dog";
console.info(animal.name);

delete animal.name;
console.info(animal.name);

//原型的原型

var obj = new Object();
obj.name = "objName";
console.info(obj.name);

console.info(Person.prototype.__proto__ === Object.prototype);
console.info(obj.__proto__ === Object.prototype);

console.info(Object.prototype.__proto__);


function Process() {}

console.info(Process.prototype);
console.info(Process.prototype.constructor);
Process.prototype = {
    handleMessage: function () {
        
    }
};

console.info(Process.prototype.constructor);

//补救措施
Process.prototype = {
    constructor: Process
};

console.info(Process.prototype.constructor);


//模拟类属性

Process.upTo = function () {
    return new Process();
}

Process.upTo();


var process = new Process();
console.info(typeof process);   //typeof 只能知道object类型，不能具体

//另外还有三种方式检测任意对象的类
//instanceof
console.info(process instanceof Process);
console.info(Process.prototype.isPrototypeOf(process));