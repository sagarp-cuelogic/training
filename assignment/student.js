var userID = Number(window.location.href.match(/id=(.+)/)[1]);

var currentUser;

for(i=0; i < allUsers.length; i++){
	if(allUsers[i].id === userID){
		currentUser = allUsers[i];
	}
}

document.getElementById('greet').innerHTML = currentUser.firstName;

var myTeacher = currentUser.teachers;
var teacherCount = currentUser.teachers.length;

function teacherTable(){
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
	cell1.innerHTML = myTeacher[a].firstName + " " + myTeacher[a].lastName;
	row.appendChild(cell2);
	cell2.innerHTML = myTeacher[a].email;
	row.appendChild(cell3);
	cell3.innerHTML = myTeacher[a].phone;
	// if(myTeacher[a].category === 'student'){
	// 	row.appendChild(cell4);
	// 	cell4.setAttribute('align', 'center');
	// 	cell4.innerHTML = '<a href="javascript:void(0);" onclick="deleteRow(this);">X</a>'
	// };
	tbody[0].appendChild(row);
}

//	Display Teachers list on the page
function myTeacherList(){
	for(a = 0; a<teacherCount; a++){
		teacherTable();
		myTeachers.push(myTeacher[a]);
	}
}

myTeacherList();
console.log(myTeachers);