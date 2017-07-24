//	Display Teachers list on the page
function myTeacherList(){
	for(i = 0; i<allUsers.length; i++){
		if(allUsers[i].category === 'teacher'){
			addOnebyOne();
			myTeachers.push(allUsers[i]);
		}
	}
}
myTeacherList();
