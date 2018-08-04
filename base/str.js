'use strict';

//字符串常用的一些方法
var helloworld = "HelloWorld";
console.info(helloworld[0]);
console.info(helloworld[2]);
console.info(helloworld[3]);
console.info(helloworld[300]);

console.info(helloworld.toUpperCase());
console.info(helloworld.toLowerCase());
console.info(helloworld.indexOf("W"));
console.info(helloworld.indexOf("Worldl"));
console.info(helloworld.substring(0, helloworld.length - 1));