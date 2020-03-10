	 const studentList = ['justin', 'maryam', 'sterling'];
	 
	 for (let i = 0; i < 3; i++){
	 var student = prompt('Enter new name');
	 studentList.push(student);
}
	 
	 for (let i = 0; i < studentList.length; i++){
	 console.log(studentList[i]);
}
