/* export let name = 'Satish';


// function
export function age(){
 return 25;
}

// Object
export let emp = {
    name: 'Tom',
    id:'30',
    salary: 250000,
}

// Array
export let student = ['Ram', 40];

// class

export class Info{
    
    constructor(){
        console.log("Hello JS");
    }
} */

// We can use above code with Single time write export

let name = 'Satish';


// function
function age(){
 return 25;
}

// Object
let emp = {
    name: 'Tom',
    id:'30',
    salary: 250000,
}

// Array
let student = ['Ram', 40];

// class
class Info{
    
    constructor(){
        console.log("Hello JS");
    }
}

export{name, age, emp, student, Info}



