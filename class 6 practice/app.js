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
function add_student() {
    let data = {
        name:prompt('Enter student name : '),
        contact:prompt('Enter student phone no : '),
        gender:prompt('Enter student gender : '),
        class:prompt('Enter student class : ')
    };  
    students.push(data);
    localStorage.setItem("students",JSON.stringify(students));
}
