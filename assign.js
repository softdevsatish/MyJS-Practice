let getMyGrade = function(marks, totalMarks){

    let myPercent = (marks/totalMarks)*100
    let myGrade=''
    if (myPercent>=90) {
        myGrade='A'
    } else if (myPercent>=60) {
        myGrade='B'
    } else if (myPercent>=40) {
        myGrade='C'
    } else{
        myGrade='Pass'
    }
        return `Your grade is ${myGrade} and percentage is ${myPercent}%`
}
let result =getMyGrade(39, 100)
console.log(result)