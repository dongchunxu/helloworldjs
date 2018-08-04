"use strict";

var xiaoming = {
    name : "xiaoming",
    birth: 1994,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};

console.info(xiaoming.age());
console.info(xiaoming.age);

//方法内部，this指向当前对象
//如果单独调用函数，this指的是全局对象，也就是window
console.info(this);

//在strict 模式下。在函数内部定义的函数，this又指向undefined了。不是strict模式，就指向window

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaohong = {
    name: 'xiaohong',
    birth: 1990,
    age: getAge
};


console.info(xiaohong.age());
console.info(getAge.apply(xiaohong, []));

//apply 和 call类似，只是apply将参数打包成数组传入，而call是分别传入

var count = 0;
var oldParseInt = parseInt;

parseInt = function () {
    count++;
    return oldParseInt.apply(null, arguments);
};

parseInt("12321");
parseInt("12321");
parseInt("12321");

console.info(count);

console.info("======================map===============================");
var arr = [1,2,3,4,5,6,7,8];
console.info(arr.map(String));

console.info("======================reduce===============================");
var arr2 = [1, 3, 5, 7, 9];
var result = arr2.reduce(function (x, y) {
   return x + y;
});

console.info(result);


var arr3 = [1,3,4,5,6];
var result3 = arr3.reduce(function (x, y) {
    return x * 10 + y;
});
console.info(result3);


var arr4 = ['1', '2', '3'];
console.info(arr4.map(parseInt));

//////filter
var oldArr = ["1","2",null, undefined,'C',' '];
var r = oldArr.filter(function (s) {
    return s && s.trim();
});

console.info(r);



