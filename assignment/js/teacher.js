var userID = Number(window.location.href.match(/id=(.+)/)[1]);

var currentUser;

for(i=0; i < allUsers.length; i++){
	if(allUsers[i].id === userID){
		currentUser = allUsers[i];
	}
}

document.getElementById('greet').innerHTML = currentUser.firstName;

var i;
var studentStatus;
var myStudent = currentUser.students;
var studentCount = currentUser.students.length;


function studentTable(){
	// console.log(i);
	var tbody = document.getElementsByTagName("tbody");
	var row = document.createElement('tr');
	var cell1 = document.createElement('td');
	var cell2 = document.createElement('td');
	var cell3 = document.createElement('td');
	var cell4 = document.createElement('td');
	var elementid = document.getElementsByTagName("tr").length;
	row.setAttribute('id', a);
	row.appendChild(cell1);
	cell1.innerHTML = myStudent[a].firstName + " " + myStudent[a].lastName;
	row.appendChild(cell2);
	cell2.innerHTML = myStudent[a].email;
	row.appendChild(cell3);
	cell3.innerHTML = myStudent[a].phone;
	// if(myStudent[a].category === 'student'){
		row.appendChild(cell4);
		cell4.setAttribute('align', 'center');
		cell4.innerHTML = '<a href="javascript:void(0);" onclick="deleteRow(this);">X</a>'
	// };
	tbody[0].appendChild(row);
}
//	Display Students list on the page
function myStudentList(){
	for(a = 0; a<studentCount; a++){
		studentTable();
		myStudents.push(myStudent[a]);
	}
}
/*function myStudentList(){
	for(i = 0; i<allUsers.length; i++){
		for(j = 0; j<studentCount; j++){
			if(myStudent[j] === allUsers[i].id){
				addOnebyOne();
				myStudents.push(allUsers[i]);
			}
		}
	}
}*/
myStudentList();
console.log(myStudents);

//	Populate list of Students in select options
function popList(){
	for(l = 0; l<allUsers.length; l++){
		var select = document.getElementById('add-student');
		var option = document.createElement('option');
		if(allUsers[l].categoryId === 1){
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
			tobeAddList.selectedIndex = 0;
			break;
		}
	}
	if (!isExists){
		addOnebyOne();
		myStudents.push(allUsers[i]);
		alert('"' + myStudents[c].firstName + ' ' + myStudents[c].lastName +'"  added Successfuly as a Student..!');
		tobeAddList.selectedIndex = 0;
		console.log(myStudents);
	};
}