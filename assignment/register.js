//	Form validations	-	Option-1
var regiForm = document.getElementById("signup");
var fName = document.registration.fname;
var lName = document.registration.lname;
var address = document.registration.address;
var phone = document.registration.phone;
var email = document.registration.email;
var pass1 = document.registration.password;
var pass2 = document.registration.confirmpassword;
var letters = /^[A-Za-z]+$/;
var num = /^[0-9]+$/;
var mailformat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var error = document.getElementById('error');

var newUser = [];

function updateUserList(){
	newUser.push({
		firstName: fName.value,
		lastName: lName.value,
		address: address.value,
		phone: Number(phone.value),
		email: email.value,
		password: pass1.value
	});
}
function firstNameCheck(){
	// For Highlight
	if(fName.value.match(letters)){
		fName.className = "form-control";
		error.innerHTML = "";
		return true;
	}else{
		fName.className = "form-control highlight";
		fName.focus();
		error.innerHTML = "Invalid First name, alphabates only";
		return false;
	}
}
function lastNameCheck(){
	if(lName.value.match(letters)){
		lName.className = "form-control";
		error.innerHTML = "";
		return true;
	}else{
		lName.className = "form-control highlight";
		lName.focus();
		error.innerHTML = "Invalid Last name, alphabates only";
		return false;
	}
}
function addressCheck(address, min){
	var add_length = address.value.length;
	if(add_length < min){
		address.className = "form-control highlight";
		error.innerHTML = "Address must be minimum " + min + " charactors";
		address.focus();
		return false;
	}else{
		address.className = "form-control";
		error.innerHTML = "";
		return true;
	}
}
function emailValidate(){
	if(email.value.match(mailformat)){
		email.className = "form-control";
		error.innerHTML = "";
		return true;
	}else if(email.value === ""){
		email.className = "form-control highlight";
		email.focus();
		error.innerHTML = "Please enter the Email Address.";
		return false;
	}else{
		email.className = "form-control highlight";
		email.focus();
		error.innerHTML = "Please correct the Email Address.";
		return false;
	}
}
function phoneValidate(){
	if(phone.value.match(num)){
		phone.className = "form-control";
		error.innerHTML = "";
		return true;
	// }else if (phone.value.length != 0 && phone.value.length =< 8){
	// 	phone.className = "form-control highlight";
	// 	phone.focus();
	// 	error.innerHTML = "Enter a valid Phone number."
	// 	return false;
	}else{
		phone.className = "form-control highlight";
		phone.focus();
		error.innerHTML = "Phone should contain only numbers."
		return false;
	}
}
function compairePassword(){
	if(pass1.value === ""){
		error.innerHTML = "Password should not be blank!";
		pass1.className = "form-control highlight";
		pass1.focus();
		return false;
	}else{
		pass1.className = "form-control";
		error.innerHTML = "";
	}
	if(pass1.value === pass2.value){
		pass2.className = "form-control";
		error.innerHTML = "";
		return true;
	}else{
		pass2.className = "form-control highlight";
		error.innerHTML = "Password did not match!!";
		pass2.focus();
		return false;
	}
}

function formValidate(){
	if (firstNameCheck()){
		if (lastNameCheck()){
			if (addressCheck(address, 12)){
				if (emailValidate()){
					if (phoneValidate()){
						if (compairePassword()){
							updateUserList();
							alert("Form Submited Succesfully!!");
							regiForm.reset();
							console.log(newUser);
						};
					};
				};
			};
		};
	};
	return false;
}
if(window.location.href.indexOf("register") > -1) {
	console.log(newUser);
}
