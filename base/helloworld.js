'use strict';
var helloworld = "helloworld";
console.info(helloworld);

//1,number

console.info("number类型===================")
var a = 123;
var b = 0.456;
var e = 1.2345e3;
var f = -12;
var nan = NaN;
var infi = Infinity;
var last = undefined;

console.info(typeof a);
console.info(typeof b);
console.info(typeof e);
console.info(typeof f);
console.info(typeof nan);
console.info(typeof infi);
console.info(typeof last);


console.info(2/0);
console.info(0/0);

console.info("字符串类型===================")

var aa = 11;
var bb = "11";
console.info(aa === bb);
console.info(aa == bb);

//nan 和nan比较永远都是false
console.info(NaN == NaN);
console.info(NaN === NaN);
console.info(isNaN(NaN));

//undefined 表示未定义。往往用在参数是否传递的时候有效

var arr = [1,2,3,true, 'hello', null, undefined];
console.info(arr.length)

var obj = {
    name: 'bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'beijing',
    hasCar: false,
};

var name = "dongchunxu";
var age = 122;
var message = `${name} 今年 ${age}`;
console.info(message);


//函数型
function fun (){
    return "a"
};

console.info(typeof fun);
console.info("对象类型" + typeof obj);
console.info("arr" + typeof arr);