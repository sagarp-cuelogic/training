// 1) Write a program to copy two objects. The target object will initially be empty.
var first = {a:1, b:2};
var second = {c:3, d:4};
var coppied = Object.assign({}, first, second);

console.log(first);
console.log(second);
console.log(coppied);


// 3) convert any given 'integer' value to its float equivalent
var num = 8;
console.log(num.toFixed(2));


// 4) convert any given 'float' value to its integer equivalent.
var num1 = 8.4358;
console.log(num1.toFixed());
