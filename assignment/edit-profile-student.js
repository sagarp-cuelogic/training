var fName = document.registration.fname;
var lName = document.registration.lname;
var address = document.registration.address;
var phone = document.registration.phone;
var email = document.registration.email;
var pass1 = document.registration.password;
var pass2 = document.registration.confirmpassword;

var fNameVal = fName.value = allUsers[0].firstName;
var lNameVal = lName.value = allUsers[0].lastName;
var addVal = address.value = allUsers[0].address;
var emailVal = email.value = allUsers[0].email;
var phoneVal = phone.value = allUsers[0].phone;
var pass1Val = pass1.value = allUsers[0].password;
var pass2Val = pass2.value = allUsers[0].password;

var inputFields = document.getElementsByTagName('input');

function updateProfile(){

}