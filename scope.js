// let globalVar = 'Globemaster'
// if (true) {
//     let localVar='Locally'
//     globalVar='Super Globemaster'
//     console.log(globalVar)
//     console.log(localVar)
// }
// console.log(globalVar)
// console.log(localVar)

// Output of above code is: ReferenceError: localVar is not defined


// let globalVar = 'Globemaster'
// if (true) {
//     var localVar='Locally'
//     globalVar='Super Globe'
//     console.log(globalVar)
//     console.log(localVar)
// }
// console.log(globalVar)
// console.log(localVar)    // This line works while localVar declare in block

//------------------------------
// King Territory Problem-1
// let king = 'Ram'

// if (true) {
//     let king='Bharat'
//     if (true) {
//         // let king='Laxman'
//         console.log(king)
//     }
// }
//  if (true) {
//      console.log('Second Part: '+ king)
//  }
    
//----------------------------
 // King Territory Problem-2
// let king = 'Ram'

// if (true) {
//     //let king='Bharat'
//     if (true) {
//         // let king='Laxman'
//         console.log(king)
//     }
// }
//  if (true) {
//      console.log('Second Part: '+ king)
//  }



//-----------------------------

  // King Territory Problem-3

//let king = 'Ram'

// if (true) {
//     //let king='Bharat'
//     if (true) {
//         // let king='Laxman'
//         console.log(king)
//     }
// }
//  if (true) {
//      console.log('Second Part: '+ king)
//  }


 //-----------------------------

  // King Territory Problem-4
  
//let king = 'Ram'

// if (true) {
//     //let king='Bharat'
//     if (true) {
//         king='Laxman'   //output is Laxman
//         console.log(king)
//     }
// }
//  if (true) {
//      console.log('Second Part: '+ king)  // dangerous output is Laxman
//  }


 
 //-----------------------------

  // King Territory Problem-5
  
let king = 'Ram'

if (true) {
    let king='Bharat'
    if (true) {
        // let king='Laxman'   
        console.log('Temporary King is:' + king)
    }
}
 if (true) {
     console.log('Finally King is: '+ king)  
 }