//Normal FUnction
const sayHello = function(name){
    return "Hey," +name + "!";
}
console.log(sayHello('Jai'));

//1st Step Arrow Function
const sayHello1 = (name1) => {
    return "Hey," +name1 + "!";
}
console.log(sayHello1('Veeru'));


//2nd Step Arrow Function
const sayHello2 = (name2) => {
    return `Hey, ${name2}!`;
}
console.log(sayHello('Gabbar'));


//3rd Step(Final) Arrow Function Declaration

const sayHello3 = (name3) =>`Hey, ${name3}!`;
console.log(sayHello3('Shambha'));

/* Outputs are:
Hey,Jai!
Hey,Veeru!
Hey,Gabbar!
Hey, Shambha! */
//------------------+---------------------------

const marvelCharacters = [{
    name: 'Gamora',
    protagonist: 'Heroine',
},{
    name: 'Spider-Man',
    protagonist: 'Hero',
},{
    name: 'Thor',
    protagonist: 'Hero'
},{
    name: 'Black Widow',
    protagonist: 'Heroine'
}]

const showList = marvelCharacters.filter((marvelCharacters) => marvelCharacters.protagonist === 'Heroine');
console.log(showList)
/* Output:
[
    { name: 'Gamora', protagonist: 'Heroine' },
    { name: 'Black Widow', protagonist: 'Heroine' }=
  ]*/