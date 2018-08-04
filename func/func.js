 "use strict";

console.info(abc);  //undefined
abs();  //print---> abs

//两种函数定义的方式
function abs() {
    console.info("abs");
}


var abc = function () {
    console.info('abc function execute.');
};


function add(num) {
    if (typeof num !== 'number') {
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    }
    else {
        return -x;
    }
}

function argu() {
    for (var i = 0; i < arguments.length; i++) {
        console.info("arg: " + arguments[i]);
    }
}

argu(1,2,3,4);


///拿到剩余的参数。除了ab
function foo(a, b) {
    var i, rest = [];
    if (arguments.length > 2 ) {
        for(i = 2; i < arguments.length; i++) {
            rest.push(arguments[i]);
        }
    }

    console.info(a);
    console.info(b);
    console.info(rest);
}


foo(1,2,3,4,5);

//ES6里替代上面这种写法
function foo2(a, b, ...rest) {
    console.info("a = " + a);
    console.info("b = " + b);
    console.info("rest = " + rest);
}

foo2(1,2,3,4,5);
foo2(1);


//变量作用域的问题。都是先从内部开始往外找

//变量提升。所以我们一般在函数内部顶部声明所有的变量

//全局作用域。默认所有的全局变量都会绑定在window对象的属性上，函数也可以这么用。window.abc(2,3,4);但是为什么报错？因为在网页上运行才会正常


var global = "hellwoorld";
console.info(global);
//console.info(window.global);



//局部变量for里定义的var依然能被外部访问，这是不允许的。可以用let替换

 const PI = 3.14;
 console.info(PI);
 //PI = 222; 无法赋值


//解构赋值 数组
var array = [1,2,3,4];
var x = array[0];
let [,,z] = [1,2,3];
console.info("z: " + z);

// var person = {
//     name: '小明',
//     age:12,
//     alias : '明明'
// };
// var {name, age, alias} = person;
// console.info(`name: ${name}, age: ${age}, alias: ${alias}`);

//嵌套对象
var per = {
    name: "董春旭",
    age: 24,
    address: {
        city: "扬州",
        street: "合心村"

    }
};

var {name, age, address: {city, street}} = per;
// console.info(`name: ${name}, age: ${age}, address: ${address}, city: ${city}, street: ${street}`);
var {name:stuName} = per;

var {isMan=true} = per;



//使用场景
 var w = 100;
 var y = 200;

 [w, y] = [y, w];
 console.info(`w: ${w}, y: ${y}`);

 function buildDate({year, month, day, hour=0, minute=0, second=0}) {
     return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
 }

var date = buildDate({year:2017, month:1, day:1});
console.info(date);









