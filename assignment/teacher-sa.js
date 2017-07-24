var i;
var studentStatus;
//	Display Teachers list on the page
/*function addOnebyOne(){
	// console.log(i);
	var tbody = document.getElementsByTagName("tbody");
	var row = document.createElement('tr');
	var cell1 = document.createElement('td');
	var cell2 = document.createElement('td');
	var cell3 = document.createElement('td');
	var cell4 = document.createElement('td');
	var elementid = document.getElementsByTagName("tr").length;
	row.setAttribute('id', i);
	row.appendChild(cell1);
	cell1.innerHTML = allUsers[i].firstName + " " + allUsers[i].lastName;
	row.appendChild(cell2);
	cell2.innerHTML = allUsers[i].email;
	row.appendChild(cell3);
	cell3.innerHTML = allUsers[i].phone;
	row.appendChild(cell4);
	cell4.innerHTML = '<a href="#" onclick="deleteRow(this);">X</a>'
	tbody[0].appendChild(row);
}*/
function myStudentList(){
	for(i = 0; i<allUsers.length; i++){
		if(allUsers[i].category === 'student'){
			addOnebyOne();
			myStudents.push(allUsers[i]);
		}
	}
}
myStudentList();

//	Populate list of Students in select
function popList(){
	for(l = 0; l<allUsers.length; l++){
		var select = document.getElementById('add-student');
		var option = document.createElement('option');
		if(allUsers[l].category === 'student'){
			option.setAttribute('id', l);
			option.text = allUsers[l].firstName + " " + allUsers[l].lastName;
			select.add(option);
		}
	}
}
popList();

//	Remove Student from the list
function deleteRow(row) {
	var row = row.parentNode.parentNode;
	console.log(row.id);
	myStudents.splice(row.id, 1);
	row.parentNode.removeChild(row);
}

function addSelected(){
	var tobeAddList = document.getElementById("add-student");
	i = tobeAddList.options[tobeAddList.selectedIndex].id;
	// console.log(i);
	studentStatus = allUsers[i].email;
	var isExists = false;
	for(c = 0; c < myStudents.length; c++){
		if(studentStatus === myStudents[c].email){
			alert(myStudents[c].firstName + " " + myStudents[c].lastName + " is already your Student..!");
			isExists = true;
			break;
		}
	}
	if (!isExists){
		addOnebyOne();
		myStudents.push(allUsers[i]);
	};
	// console.log(allUsers[i]);
}