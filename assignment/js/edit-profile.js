var userID = Number(window.location.href.match(/id=(.+)/)[1]);

var currentUser;

for(i=0; i < allUsers.length; i++){
	if(allUsers[i].id === userID){
		currentUser = allUsers[i];
	}
}

var fName = document.registration.fname;
var lName = document.registration.lname;
var address = document.registration.address;
var phone = document.registration.phone;
var email = document.registration.email;
var pass1 = document.registration.password;
var pass2 = document.registration.confirmpassword;

var oldfName = fName.value = currentUser.firstName;
var oldlName = lName.value = currentUser.lastName;
var oldAddress = address.value = currentUser.address;
var oldEmail = email.value = currentUser.email;
var oldPhone = phone.value = currentUser.phone;
var oldPass1 = pass1.value = currentUser.password;
var oldPass2 = pass2.value = currentUser.password;

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
	/*for(var x in currentUser){
		console.log(x);
	}*/
	var newfName = fName.value;
	var newlName = lName.value;
	var newAddress = address.value;
	var newEmail = email.value;
	var newPhone = Number(phone.value);
	var newPass1 = pass1.value;

	if(oldEmail != newEmail){
		alert('You are not allowed to change Email Address!');
		email.value = currentUser.email;
	}else if(oldfName === newfName && oldlName === newlName && oldAddress === newAddress && oldPhone === newPhone && oldPass1 === newPass1){
		alert('Nothing to update...!');
	}else{
		if(oldfName != newfName){
			currentUser.firstName = fName.value;
		}
		if(oldlName != newlName){
			currentUser.lastName = lName.value;
		}
		if(oldAddress != newAddress){
			currentUser.address = address.value;
		}
		if(oldPhone != newPhone){
			currentUser.phone = phone.value;
		}
		if(oldPass1 != newPass1){
			currentUser.password = pass1.value;
		}
		alert("Profile updated Succesfully!!");
		console.log(currentUser);
	}
}
function updateProfile(){
	if(validateUpdates()){
		updateValues();
	};
}