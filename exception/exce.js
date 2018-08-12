// "use strict";

var r1, r2, s = null;

try {
    r1 = s.length;
    r2 = 100; // 该语句不会执行
} catch (e) {
    console.log('出错了：' + e);
} finally {
    console.log("finally");
}

console.log('r1 = ' + r1); // r1应为undefined
console.log('r2 = ' + r2); // r2应为undefined


try {
    var a = 120;
    if (a === 120) {
        throw new TypeError("a不能为int型");
    }
} catch (e) {
    console.info(e.message);
}


console.info(global);

console.info(this == global);

l = 100;
console.info(global.l);




