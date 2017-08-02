var x;
if(window.location.href.indexOf("student") > -1) {
	x = 0;
	console.log(allUsers[x]);
}else if(window.location.href.indexOf("teacher") > -1) {
	x = 3;
	console.log(allUsers[x]);
}

var fName = document.registration.fname;
var lName = document.registration.lname;
var address = document.registration.address;
var phone = document.registration.phone;
var email = document.registration.email;
var pass1 = document.registration.password;
var pass2 = document.registration.confirmpassword;

var oldfName = fName.value = allUsers[x].firstName;
var oldlName = lName.value = allUsers[x].lastName;
var oldAddress = address.value = allUsers[x].address;
var oldEmail = email.value = allUsers[x].email;
var oldPhone = phone.value = allUsers[x].phone;
var oldPass1 = pass1.value = allUsers[x].password;
var oldPass2 = pass2.value = allUsers[x].password;

function validateUpdates(){
	if (firstNameCheck()){
		if (lastNameCheck()){
			if (addressCheck(address, 12)){
				if (emailValidate()){
					if (phoneValidate()){
						if (compairePassword()){
							return true;
						};
					};
				};
			};
		};
	};
	return false;
}
function updateValues(){
	/*for(var x in allUsers[x]){
		console.log(x);
	}*/
	var newfName = fName.value;
	var newlName = lName.value;
	var newAddress = address.value;
	var newEmail = email.value;
	var newPhone = phone.value;
	var newPass1 = pass1.value;

	if(oldEmail != newEmail){
		alert('You are not allowed to change Email Address!');
		email.value = allUsers[x].email;
	}else if(oldfName === newfName && oldlName === newlName && oldAddress === newAddress && oldPhone === newPhone && oldPass1 === newPass1){
		alert('Nothing to update...!');
	}else{
		if(oldfName != newfName){
			allUsers[x].firstName = fName.value;
		}
		if(oldlName != newlName){
			allUsers[x].lastName = lName.value;
		}
		if(oldAddress != newAddress){
			allUsers[x].address = address.value;
		}
		if(oldPhone != newPhone){
			allUsers[x].phone = phone.value;
		}
		if(oldPass1 != newPass1){
			allUsers[x].password = pass1.value;
		}
		alert("Profile updated Succesfully!!");
		console.log(allUsers[x]);
	}
}
function updateProfile(){
	if(validateUpdates()){
		updateValues();
	};
}