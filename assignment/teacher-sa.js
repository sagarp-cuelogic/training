var i;
var studentStatus;

//	Display Students list on the page
function myStudentList(){
	for(i = 0; i<allUsers.length; i++){
		if(allUsers[i].category === 'student'){
			addOnebyOne();
			myStudents.push(allUsers[i]);
		}
	}
	console.log(myStudents);
}
myStudentList();

//	Populate list of Students in select options
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

//	Remove Student from the list and array
function deleteRow(row) {
	var row = row.parentNode.parentNode;
	var rowNum = row.rowIndex;
	myStudents.splice((rowNum - 1), 1);
	row.parentNode.removeChild(row);
	console.log(myStudents);
}

//	Add selected student to the "My Students" list
function addSelected(){
	var tobeAddList = document.getElementById("add-student");
	i = tobeAddList.options[tobeAddList.selectedIndex].id;
	studentStatus = allUsers[i].email;
	var isExists = false;
	for(c = 0; c < myStudents.length; c++){
		if(studentStatus === myStudents[c].email){
			alert('"' + myStudents[c].firstName + ' ' + myStudents[c].lastName +'" is already your Student..!');
			isExists = true;
			break;
		}
	}
	if (!isExists){
		addOnebyOne();
		myStudents.push(allUsers[i]);
		alert('"' + myStudents[c].firstName + ' ' + myStudents[c].lastName +'"  added Successfuly as a Student..!');
		console.log(myStudents);
	};
}