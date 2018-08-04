'use strict';

var arr = [1,2,3];
for (var i of arr) {
    console.info(i)
}
console.info("==========");
for (var i in arr){
    console.info(i);
}

console.info("==========");

var map = new Map([["name","dongchunxu"], ["age","1"]]);
for (var j in map) {
    console.info(j);
    console.info(map[j]);
}
console.info("==========");
for (var i of map) {
    console.info(i)
}
//for in 和for of有什么区别，of循环的是属性的名称。


//遍历一下数组
var arrForEach = ['A', 'B', 'C'];
arrForEach.forEach(function (element, index, array) {
    console.info(element + "=>element," + index + "=>index" + array + "=>array");
});

var setForSet = new Set([1,2,3,4,6]);
setForSet.forEach(function (element, sameElement, set) {
    console.log(element);
});

var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map) {
    console.log(value);
});


