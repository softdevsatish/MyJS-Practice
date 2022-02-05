let marks = ['35','45','60','75'];

let division = marks.every(checkMark);
console.log(division);

function checkMark(arry){
    return arry>=33;
}