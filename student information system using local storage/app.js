// let obj = {
//     name:'Kashif Shaikh',
//     contact:'03233521729',
//     gender:'Male'
// }
// console.log(obj);

// let obj = {
//     name:'Kashif Shaikh',
//     contact:'03233521729',
//     gender:'Male'
// }
// console.log(obj.name);
// console.log(obj.contact);

// let obj = {
//     name:'Kashif Shaikh',
//     contact:'03233521729',
//     gender:'Male'
// }
// console.log(obj.name);
// console.log('before update : '+obj.contact);
// obj.contact = '03361289279' ;
// console.log('after update : '+obj.contact);

// let student0 = {
//     name:'Kashif Shaikh',
//     contact:'03233521729',
//     gender:'Male',
//     class:'BSCS-6'
// }
// let student1 = {
//     name:'Ashhad Ahmed',
//     contact:'03112090012',
//     gender:'Male',
//     class:'BSCS-6'
// }

// let students = [student0,student1]
// console.log(students);

let old_data = JSON.parse(localStorage.getItem("students"));
let students = old_data !== null ? old_data : [] ;

function insert_data(data) {
    const data_table = document.getElementById('data_table');
    let row = data_table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = data.name;
    cell2.innerHTML = data.contact;
    cell3.innerHTML = data.gender;
    cell4.innerHTML = data.class;
}

if (students !== null) {
    for(let i in students){
        insert_data(students[i]);
    }
}

function add_student() {
    let data = {
        name:prompt('Enter student name : '),
        contact:prompt('Enter student phone no : '),
        gender:prompt('Enter student gender : '),
        class:prompt('Enter student class : ')
    };  
    students.push(data);
    localStorage.setItem("students",JSON.stringify(students));
    insert_data(data);
}

function delete_student() {
    let student_name = prompt('Enter student name for deleting : ');
    for(let i in students){
        if(student_name.toLowerCase() === students[i].name.toLowerCase()){
            console.log(i);
            document.getElementById('data_table');
            data_table.deleteRow(+(i)+1);
            students.splice(i,1)
            localStorage.setItem("students",JSON.stringify(students));
        }
    }
}