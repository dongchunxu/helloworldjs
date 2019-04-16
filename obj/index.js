"use strict";


var obj = new Object(); // 等价于 obj = {};
obj.name = "helloworld";
obj.age = 10;

console.info(obj.name );


var person = {};
Object.defineProperty(person, "name", {
    writable: false,
    value: "Mike"
});

console.info(person.name);
// person.name = "Hello";//报错
// console.info(person.name);



var person1 = {};

Object.defineProperty(person1, "name", {
    configurable: false,
    value: "dongchunxu",
    writable: false,
});
console.info("person1: " + person1.name);

Object.defineProperty(person1, "name", {
    // configurable: true,  //报错
    // value: "dongchunxu2"    //报错
    // writable: true,
});



// 读取属性的描述符
var person2 = {};
Object.defineProperties(person2, {
    _year: {
        value:2019
    },
    edition: {
        value: 1
    },
    year: {
        get: function () {
            return this._year;
        },
        set: function (newValue) {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    },
    month:{}
});

var description = Object.getOwnPropertyDescriptor(person2, "_year");
console.info(description);

var description2 = Object.getOwnPropertyDescriptor(person2, "year");
console.info(description2);

var description3 = Object.getOwnPropertyDescriptor(person2, "month");
console.info(description3);


// 用工厂方法创建对象
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        console.info(this.name);
    };
    return o;
}

var person4 = createPerson("G1", 12, "doctor");
var person5= createPerson("G2", 13, "teacher");
console.info(person4);
console.info(person5);