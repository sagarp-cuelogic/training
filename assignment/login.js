//	Check if the Credentials are valid
function IsValid(userEmail, userPass){
	for(i = 0; i < allUsers.length; i++){
		if(userEmail == allUsers[i].email && userPass == allUsers[i].password){
			return allUsers[i].category;
		}
	}
	return "";
}

//	Check the Category of the user and redirect to the page
function login(){
	var userEmail = document.getElementById('email').value;
	var userPass = document.getElementById('password').value;
	var category = IsValid(userEmail, userPass);
	if(category!="" && userEmail === 'sagar.patil@cuelogic.com'){
		window.location.href = 'sagar-patil.html';
	}else if(category!="" && userEmail === 'shital.agrwal@cuelogic.com'){
		window.location.href = 'shital-agrwal.html';
	}else if(category!=""){
		window.location.href = category+'.html';
	}else{
		alert("Please user valid Email ID and Password..!")
	}
}