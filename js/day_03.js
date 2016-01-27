//	1) Write a program to calculate factorial
var factorial = function num(i){
	if (i <= 1) {
		return 1;
	} else {
		return i * num(i - 1);
	}
}
factorial(5);

//	2) Update program - 2 of Practicals Day 2 to add a method that will print name (called printName()) of each student object in its prototype.
function student (first_name, last_name, city){
	this.Name = first_name;
	this.Surname = last_name;
	this.residance = city;
}

student.prototype.printName = function(){
	console.log(this.Name, this.Surname);
}

var student1 = new student("Sagar", "Patil", "Nashik")
var student2 = new student("Vanshaj", "Rai", "Pune")
var student3 = new student("Nilesh", "Mahajan", "Mumbai")

student1.printName();
student2.printName();
student3.printName();


// 3) count the no of occurrences of substring
var count = 0;
var find_here = function(text1, text2){
  for(i = 0; i < text1.length; i++){
		if (text1[i] == text2){
			count++;
		}
	}
	console.log(text2 + " occured " + count + " times in " + text1);

  var index = text1.lastIndexOf(text2);
  console.log(index);

}
find_here("sagar patil", "a");

// 4) Write a function that will accept a unix timeStamp and covert to its UTC equivalent value
var date = new Date();
var utc = date.toUTCString();
console.log(utc);


//  6) Write a program to do the following:
//     1. Create an array and add numbers 1 to 100 in it
var createArr = function(){
	var newArray = [];
	for(var i = 1; i<101; i++){
		newArray.push(i);
	}
	return newArray;
}
console.log(createArr());

