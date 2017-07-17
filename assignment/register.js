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

function firstNameCheck(){
	// For Highlight
	if(fName.value.match(letters)){
		fName.className = "form-control";
		return true;
	}else{
		fName.className = "form-control highlight";
		fName.focus();
		return false;
	}
}
function lastNameCheck(){
	if(lName.value.match(letters)){
		lName.className = "form-control";
		return true;
	}else{
		lName.className = "form-control highlight";
		lName.focus();
		return false;
	}
}
function addressCheck(address, min){
	var add_length = address.value.length;
	if(add_length < min){
		address.className = "form-control highlight";
		alert("Address must be minimum " + min + " charactors");
		address.focus();
		return false;
	}else{
		address.className = "form-control";
		return true;
	}
}
function emailValidate(){
	if(email.value.match(mailformat)){
		email.className = "form-control";
		return true;
	}else{
		email.className = "form-control highlight";
		email.focus();
		return false;
	}
}
function phoneValidate(){
	if(phone.value.match(num)){
		phone.className = "form-control";
		return true;
	}else{
		phone.className = "form-control highlight";
		phone.focus();
		return false;
	}
}
function compairePassword(){
	if(pass1.value === ""){
		alert("Password should not be blank!");
		pass1.className = "form-control highlight";
		pass1.focus();
		return false;
	}else{
		pass1.className = "form-control";
	}
	if(pass1.value === pass2.value && pass2.value != ""){
		pass2.className = "form-control";
		return true;
	}else{
		pass2.className = "form-control highlight";
		alert("Password did not match!!");
		pass2.focus();
		return false;
	}
}

function formValidate(){
	/*var inputField = document.getElementsByClassName("form-control");
	if (inputField.value === ""){
		inputField.className = "form-control highlight";
		return false;
	}else{
		inputField.className = "form-control";
		return true;
	};*/
	if (firstNameCheck()){
		if (lastNameCheck()){
			if (addressCheck(address, 12)){
				if (emailValidate()){
					if (phoneValidate()){
						if (compairePassword()){
							alert("Form Submited Succesfully!!");
							regiForm.reset();
						};
					};
				};
			};
		};
	};
	return false;
}
