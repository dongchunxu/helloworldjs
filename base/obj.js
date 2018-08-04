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

