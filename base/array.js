'use strict';

var arr = [1,2,3.14,'Hello',null,true];
console.info(arr.length);

//可以直接改变arr的长度

arr[100] = "helloworld";
console.info(arr.length);

//JavaScript数组可以调用indexOf方法知道某个元素在第几个
console.info(arr.indexOf(3.14));
console.info(arr.indexOf(null));

console.info(arr.slice(0,2));  //   取指定范围内的数据
console.info(arr.pop());
// console.info(arr);

console.info(arr.shift());
console.info(arr.unshift());
console.info(arr);


console.info(arr.reverse());

//想要从指定位置操作数组。
var arrr = [1,2,3,4,5];
arrr.splice(1,2,12,2);
console.info(arrr);


var a = [1,23];
var b = [4,5,6];
console.info(a.concat(b));


//拼接
var c = [1,2,3,4];
console.info(c.join('-'));





