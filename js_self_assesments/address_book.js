var bob = {firstName: "Bob", lastName: "Jones", phoneNumber: "(650) 777-7777"};
var mary = {firstName: "Mary", lastName: "Johnson", phoneNumber: "(650) 888-8888"};

var contacts = [bob, mary];
var checkList = document.getElementsByClassName("contact");
console.log(checkList.length);

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
function refreshlist(){
	if(checkList.length === 0){
		return list();
	} else {
		document.getElementById("showlist").innerHTML = "";
		return list();
	}
}
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
        if(value === (contacts[i].firstName) || value === (contacts[i].lastName)){
            console.log(printPerson(contacts[i]));
        }else{
            return;
        }
    }
}
