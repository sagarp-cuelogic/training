//	Check if the Credentials are valid
function IsValid(userEmail, userPass){
	for(i = 0; i < allUsers.length; i++){
		if(userEmail == allUsers[i].email && userPass == allUsers[i].password){
			return allUsers[i].categoryId;
		}
	}
	return "";
}

//	Check the Category of the user and redirect to the page
function login(){
	var userEmail = document.getElementById('email').value;
	var userPass = document.getElementById('password').value;
	var category = IsValid(userEmail, userPass);
	/*if(category!="" && userEmail === 'sagar.patil@cuelogic.com'){
		window.location.href = 'sagar-patil.html';
	}else if(category!="" && userEmail === 'shital.agrwal@cuelogic.com'){
		window.location.href = 'shital-agrwal.html';
	}else */
	if(category === 1){
		window.location.href = 'student.html?id='+allUsers[i].id;
	}else if(category === 2){
		window.location.href = 'teacher.html?id='+allUsers[i].id;
	}else{
		alert("Please user valid Email ID and Password..!")
	}
}