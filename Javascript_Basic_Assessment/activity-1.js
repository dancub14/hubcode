		const name1 = prompt('enter a student name');
        const name2 = prompt('enter a student name');
        const name3 = prompt('enter a student name');
       

        const studentList = [];

        studentList.push(name1);
        studentList.push(name2);
        studentList.push(name3);


        for (let i = 0; i < studentList.length; i++){
		const student = studentList[i];
		console.log(studentList[i]);
		alert('Student ' + (i + 1) + ' is ' + studentList[i]);
		}