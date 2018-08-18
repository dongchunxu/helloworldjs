"use strict";

var man = {
    weibo: "@dongchunxu",
    $age: null,
    get age() {
        if ($age) {
            return this.$age;
        }
        else {
            return new Date().getFullYear() - 1994;
        }
    },

    set age(val) {
        val += val;
        if (!isNaN(val) && val > 15 && val < 20) {
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


man.age="dong";
console.info(man.age);
