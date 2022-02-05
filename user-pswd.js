let userEmail = 'abc123jjj';
let password = '@12345678';
let userChecker = function(myString){
    if((myString.includes(123)) && (myString.length>6)){
        return true;
    } 
    return false;
}
console.log(userChecker(userEmail));

let passChecker = function(pass){
    if((pass.includes('@')) && (pass.length>8)){
        return true;     
    }
    return false;
}

console.log(passChecker(password));