var bob = {firstName: "Bob", lastName: "Jones", phoneNumber: "(650) 777-7777"};
var mary = {firstName: "Mary", lastName: "Johnson", phoneNumber: "(650) 888-8888"};
var bob2 = {firstName: "Bob", lastName: "Willson", phoneNumber: "(650) 777-7777"};
var linda = {firstName: "Linda", lastName: "Johnson", phoneNumber: "(650) 888-8888"};

var contacts = [bob, mary, bob2, linda];
var checkList = document.getElementsByClassName("contact");
var searchList = document.getElementsByClassName("srch-result");
// console.log(contacts.length);

function printPerson(person) {
    document.getElementById("showlist").innerHTML += ("<p class='contact'>" + person.firstName + " " + person.lastName + "</p>");
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
		//alert("list printed");
	}
}

//	view updated contact list
function refreshlist(){
	if(checkList.length === 0){
		return list();
	} else {
		document.getElementById("showlist").innerHTML = "";
		return list();
	}
}

//	Add new contact to the list
function add(){
	contacts[contacts.length] = {
		"firstName": document.getElementById("fname").value,
		"lastName": document.getElementById("lname").value,
		"phoneNumber": document.getElementById("phone").value
	};
	// document.getElementsByTagName("input").value = "";
	document.getElementById("fname").value = "";
	document.getElementById("lname").value = "";
	document.getElementById("phone").value = "";
}

// Create a search function
function search(){
	var value = document.getElementById("search").value;
    // var contactsLength = contacts.length;
    for (var i=0; i < contacts.length; i++){
        if(value == (contacts[i].firstName) || value == (contacts[i].lastName)){
			document.getElementById("search-results").innerHTML += ("<p class='srch-result'>" + contacts[i].firstName + " " + contacts[i].lastName + "</p>");
			/*if(searchList.length === 0){
				document.getElementById("search-results").innerHTML += ("<p class='srch-result'>" + contacts[i].firstName + " " + contacts[i].lastName + "</p>");
			} else {
				document.getElementById("search-results").innerHTML = "";
				document.getElementById("search-results").innerHTML += ("<p class='srch-result'>" + contacts[i].firstName + " " + contacts[i].lastName + "</p>");
			}*/
            // return;
        }
    }
}














//	Object constructor and methods on it
function Player(n,s,r){
	this.name = n;
	this.score = s;
	this.rank = r;

//	this is called methods of the Object
	// this.logInfo = function(){
	// 	console.log("I am: " + this.name);
	// };
	// this.pramote = function(){
	// 	this.rank--;
	// 	console.log("My new rank is " + this.rank);
	// }
}

//	Adding prototype to the object
Player.prototype.logInfo = function(){
	console.log("I am: " + this.name);
}
Player.prototype.pramote = function(){
	this.rank--;
	console.log("My new rank is " + this.rank);
}

//	Creating new Objects with object constructors
var sagar = new Player("Sagar", 3200, 5);
var sharad = new Player("Sharad", 1800, 8);
var pradip = new Player();

console.log(sagar.name);
console.log(sharad.name);

sagar.logInfo();
sharad.logInfo();

sagar.pramote();
sharad.pramote();