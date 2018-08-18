"use strict";

var person = {
    name: "helloworld",
    'serino': 'x1232'
};

console.info(person.name);
console.info(person.serino);
console.info(person['name']);
console.info(person['serino']);

console.info(JSON.stringify(person));


//添加属性和删除属性
console.info(person.age);
person.age = 12;
console.info(person.age);
delete person.age;
console.info(person.age);

console.info("age" in person);
console.info(person.hasOwnProperty('toString'));
console.info("toString" in person);

console.info("================");
for (var i in person) {
    console.info(person[i]);
}



console.info("====================对象的key================");
var obj = {};
obj['111'] = 1;
obj[111] = 2;

console.info(obj);


obj[{}] = true;
obj[{x:1}] = true;
console.info(obj);

for (var x in obj) {
    console.info("for-in:" + typeof x);
}

console.info("================ 原型链 =====================")
function Foo(){};
Foo.prototype.x = 12;
var f = new Foo();



console.info(f.__proto__ === Foo.prototype);
console.info(Foo.prototype.__proto__ === Object.prototype);
console.info(Object.prototype.__proto__ === null);
console.info(f.hasOwnProperty('x'));
console.info(Foo.hasOwnProperty('x'));
console.info(Foo.prototype.hasOwnProperty('x'));
console.info(f.x);
