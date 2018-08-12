"use strict";

function type(o) {
    var t, c, n;    //type, class, name
    if (o === null) return "null";
    if (o !== o) return "nan";
    if ((t = typeof o) !== "object") {
        return t;
    }
    if ((c = classof(o)) !== "Object"){
        return c;
    }
    if (o.constructor && typeof o === 'function'
        && (n = o.constructor.getName())) {
        return n;
    }
    return "Object";
}

function classof(o) {
    return Object.prototype.toString.call(o).slice(8, -1);
}


function Person() {
}


console.info(type(Person));
console.info(type(new Person()));
console.info(type(new Date()));