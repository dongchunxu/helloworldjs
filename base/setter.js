"use strict";

var man = {
    weibo: "@dongchunxu",
    $age: null,
    get age() {
        if (this.$age) {
            return this.$age;
        }
        else {
            return new Date().getFullYear() - 1994;
        }
    },

    set age(val) {
        val += val;
        if (!isNaN(val) && val > 15 && val <= 200) {
            this.$age += val;
        }
        else {
            throw new Error("unexcept type:" + val);
        }
    }
};

console.info(man.weibo);

man.age = 100;
console.info(man.age);


// man.age="dong";
console.info(man.age);

//set/get与原型链在一起的时候有个坑
function Foo(){}

Object.defineProperty(Foo.prototype, 'z', {get: function () {
        return 1;
}});
var obj = new Foo();
console.info(obj.z);    //这里z读的是obj对象的原型对象上的。

//但是如果这里直接改obj的z属性,无法赋值，因为原型上没有set方法
// obj.z = 12;
// console.info(obj.z);

console.info("======================");
//如果想要给对象上加一个z属性，这时候
Object.defineProperty(obj, 'z', {value:10001, configurable: true});
console.info(obj.z);

delete obj.z;
console.info(obj.z);   //这时候相当于把对象上的z删除了，去找它的原型对象上的z

console.info("======================");
var o = {};
Object.defineProperty(o, 'x', {value: 1});
var obk  = Object.create(o);
console.info(obk.x);
//obk.x = 1001; 这里不能加，因为是只读的

Object.defineProperty(obk, 'x', {writable: true, configurable: true, value:2000});
console.info(obk.x);
obk.x = 5000;
console.info(obk.x);
console.info(o.x);







