console.info(this);

console.info(this instanceof Object);

console.info(Math.random());
//console.info(this.Math.random());


var a = 10;
console.info(this.a);
console.info(this);


console.info(foo);
function foo() {

}

var foo = 1;
console.info(foo);


console.info(foo.[[scope]]);