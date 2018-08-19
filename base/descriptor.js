"use strict";

let d1 = Object.getOwnPropertyDescriptor({name: "hello"}, 'name');
console.info(d1);

let d2 = Object.getOwnPropertyDescriptor({name: "don"}, "age");
console.info(d2);

//定义一个
let person = {};
Object.defineProperty(person, 'name', {
    value: 'qiao',
    writable: false,
    configurable: true,
    enumerable: false
});

console.info(person.name);

console.info(person);

console.info("name" in person);

console.info("=============for============");
for (let n in person) {
    console.info("for---->" + n);
}
console.info("=============for ending ============");

delete person.name;
console.info(person.name);  //configurable 为false的时候不能删除.

console.info("=========================");

let animal = {};
Object.defineProperties(animal, {
    age: {value: 123, enumerable: true},
    corp: {value: 'BABA', enumerable: true},
    luck: {
        get: function () {
            return Math.random() > 0.5 ? 'good' : 'bad';
        }
    },
    promote: {
        set: function (level) {
            this.age += level;
        }   
    }
});


let age = Object.getOwnPropertyDescriptor(animal, 'age');
console.info(age);

let corp = Object.getOwnPropertyDescriptor(animal, 'corp');
console.info(corp);
