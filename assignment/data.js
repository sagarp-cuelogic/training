var allUsers = [
	{
		firstName: 'Sagar',
		lastName: 'Patil',
		address: '12, Radhe Park, Pune-42',
		phone: '9823113200',
		email:'sagar.patil@cuelogic.com',
		password:'12345',
		category:'student'
	},
	{
		firstName: 'Pradip',
		lastName: 'Chalake',
		address: '315, R.D. Rajaram Road, Mumbai-01',
		phone: '9823112145',
		email:'pradip.chalake@cuelogic.com',
		password:'987654',
		category:'student'
	},
	{
		firstName: 'Nilesh',
		lastName: 'Mahajan',
		address: '6-A, Krishna Housing Socieity, Pune-24',
		phone: '9823114589',
		email:'nilesh.mahajan@cuelogic.com',
		password:'bom@125',
		category:'student'
	},

	{
		firstName: 'Shital',
		lastName: 'Agrwal',
		address: '24-A, Karve Road, Pune-18',
		phone: '8888812648',
		email:'shital.agrwal@cuelogic.com',
		password:'12345',
		category:'teacher'
	},
	{
		firstName: 'Prashant',
		lastName: 'Gurav',
		address: 'Ram Sadan, Baner, Pune-04',
		phone: '8888818954',
		email:'prashant.gurav@cuelogic.com',
		password:'pg@cue123',
		category:'teacher'
	},
	{
		firstName: 'Baba',
		lastName: 'Kokitkar',
		address: '154, Charchgate, Mumbai-38',
		phone: '8888814803',
		email:'baba@gmail.com',
		password:'baba#456',
		category:'teacher'
	}
]

var myTeachers = []

var myStudents = []

function addOnebyOne(){
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
	if(allUsers[i].category === 'student'){
		row.appendChild(cell4);
		cell4.setAttribute('align', 'center');
		cell4.innerHTML = '<a href="javascript:void(0);" onclick="deleteRow(this);">X</a>'
	};
	tbody[0].appendChild(row);
}
