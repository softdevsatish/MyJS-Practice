import {name,age, emp, student, Info} from './library.js'
// console.log(name);
let a= age();
// console.log(a);

document.body.innerHTML = a;

// console.log(emp.name)
for (let i in emp){
    console.log(`${emp[i]}`);
}

for(let i in student){
    // console.log(`${student[i]}`);
}

let test = new Info();

