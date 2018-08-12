'use strict';

//初始化map需要一个二维数组
var map = new Map([['dongchunxu', 12], ['qiaoyan', 23], ['lisi', 123]]);
console.info(map.get('dongchunxu'));


var map2 = new Map();
map2.set("", "");



console.info("contains:dongchunxu---->" + map.has("dongchunxu"));
console.info("get:一个不存在的---->" + map.get("chun"));
//返回map里所有的 key,返回一个迭代器
var keys = map.keys();
console.info("map.keys:" + keys);

//遍历map的所有的key
for (var x of map.keys()) {
    console.info("for循环keys--->" + x);
}

for (var x of map) {
    console.info("for-map-x[0]:" + x[0]  + ", x[1]:" + x[1]);
}

for (var [k,v] of map.entries()) {
    console.info("key:" + k + ",value: " + v);
}



console.info("map.entries:" + map.entries());


//for in 和for of的区别，for in遍历的是对象的属性，例如数组，属性是索引，加一个name属性，这时候name也会遍历出来
//如果for of则不会有这样的问题，他遍历的实际的内容

console.info(map.size);



//forEach遍历的是什么？
map.forEach(function (value, key, map) {
    console.info("forEach的方式遍历, value:" + value + ",key:" + key + ", map:" + map + "，this = " + this);
});


var set = new Set([1,2,3,4]);
console.info(set.size);


