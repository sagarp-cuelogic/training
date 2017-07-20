var i;
//	Display Teachers list on the page
function addOnebyOne(){
	console.log(i);
	var tbody = document.getElementsByTagName("tbody");
	var row = document.createElement('tr');
	var cell1 = document.createElement('td');
	var cell2 = document.createElement('td');
	var cell3 = document.createElement('td');
	var cell4 = document.createElement('td');
	var elementid = document.getElementsByTagName("tr").length;
	row.setAttribute('id', i);
	row.appendChild(cell1);
	cell1.innerHTML = myStudents[i].firstName + " " + myStudents[i].lastName;
	row.appendChild(cell2);
	cell2.innerHTML = myStudents[i].email;
	row.appendChild(cell3);
	cell3.innerHTML = myStudents[i].phone;
	row.appendChild(cell4);
	cell4.innerHTML = '<a href="#" onclick="deleteRow(this);">X</a>'
	tbody[0].appendChild(row);
}
function myStudentList(){
	for(i = 0; i<myStudents.length; i++){
		addOnebyOne();
	}
}
myStudentList();

//	Populate list of Students in select
function popList(){
	for(l = 0; l<myStudents.length; l++){
		var select = document.getElementById('add-student');
		var option = document.createElement('option');
		option.setAttribute('id', l);
		option.text = myStudents[l].firstName + " " + myStudents[l].lastName;
		select.add(option);
	}
	/*for(check=0; check<myStudents.length; check++){
		if(document.getElementsByTagName("tr").document.getElementById(check) === document.getElementById("add-student").document.getElementById(check)){
			select.remove(option(check));
		};
	}*/
}
popList();

//	Remove Student from the list
function deleteRow(row) {
	var row = row.parentNode.parentNode;
	row.parentNode.removeChild(row);
}

function addSelected(){
	var tobeAddList = document.getElementById("add-student");
	i = tobeAddList.options[tobeAddList.selectedIndex].id;
	console.log(i);
	/*var rowLength = document.getElementsByTagName("tr").length - 1;
	for(a=0; a<rowLength; a++){
		var checkStudent = document.getElementById('mystudents').row[a].id;
		if(checkStudent === i){
			alert("worng");
		}else{
			addOnebyOne();
		}
	}
	console.log(checkStudent);*/
	addOnebyOne();
}