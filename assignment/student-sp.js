//	Display Teachers list on the page
function myTeacherList(){
	for(i = 0; i<myTeachers.length; i++){
		var tbody = document.getElementsByTagName("tbody");
		var row = document.createElement('tr');
		var cell1 = document.createElement('td');
		var cell2 = document.createElement('td');
		var cell3 = document.createElement('td');
		// var cell4 = document.createElement('td');
		// var elementid = document.getElementsByTagName("tr").length
		// row.appendChild(cell);
		// cell.innerHTML = "New Inserted"
		row.setAttribute('id', i);
		row.appendChild(cell1);
		cell1.innerHTML = myTeachers[i].firstName + " " + myTeachers[i].lastName;
		row.appendChild(cell2);
		cell2.innerHTML = myTeachers[i].email;
		row.appendChild(cell3);
		cell3.innerHTML = myTeachers[i].phone;
		// row.appendChild(cell4);
		// cell4.innerHTML = '<a href="#" id="remove">X</a>'
		tbody[0].appendChild(row);
	}
}

myTeacherList();
