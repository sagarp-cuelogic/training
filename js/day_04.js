// 1) Write a program to copy two objects. The target object will initially be empty.
var first = {a:1, b:2};
var second = {c:3, d:4};
var coppied = Object.assign({}, first, second);

console.log(first);
console.log(second);
console.log(coppied);

// 2) Write a program to merge two objects.
var car1 = {make: "Ford", model: "Figo"};
var car2 = {make: "Maruti", model: "Swift", color: "Red", transmission: "Manual"};

function modified(object1, object2){
	var object3 = {};
	for(i in object2){
		object3[i] = object2[i];
	}
	for(i in object1){
		object3[i] = object1[i];
	}
	return object3;
}
var car3 = modified(car1, car2)
console.log(car3);

// 3) convert any given 'integer' value to its float equivalent
var num = 8;
console.log(num.toFixed(2));


// 4) convert any given 'float' value to its integer equivalent.
var num1 = 8.4358;
console.log(num1.toFixed());
