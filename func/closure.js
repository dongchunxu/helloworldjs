"use strict";

//返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。

function count() {
    var arr = [];
    for(var i = 1;i <= 3; i++) {
        arr.push(function () {
            return i * i;
        })
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

console.info(f1());
console.info(f2());
console.info(f3());


function count1() {
    var arr = [];
    for (var i = 1; i <= 3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
    }
    return arr;
};

var result1 = count1();
var f4 = result1[0];
var f5 = result1[1];
var f6 = result1[2];
console.info(f4());
console.info(f5());
console.info(f6());


function create_counter(intial) {
    var x = intial || x;

    return {
        inc: function () {
            x++;
            return x;
        }
    };
}

var c1 = create_counter(1);
console.info(c1.inc());
console.info(c1.inc());
console.info(c1.inc());

var c2= create_counter(10);
console.info(c2.inc());
console.info(c2.inc());
console.info(c2.inc());


//箭头函数看上去是匿名函数的一种简写，但实际上，箭头函数和匿名函数有个明显的区别：箭头函数内部的this是词法作用域，由上下文确定。
//这里从call的第一个参数会被忽略
var obj = {
    birth: 1990,
    getAge: function (year) {
        var b = this.birth;
        var fn = (y) => y - this.birth;
        return fn.call({birth:2000}, year);
    }
};

var age = obj.getAge(2015);
console.info(age);