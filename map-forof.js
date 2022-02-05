var Rama = {
    name: 'Lord Rama',
    birthPlace: 'Ayodhya',
    hadBrothers: 3,
    wasKing: true
}

var Krishna = {
    name: 'Lord Krishna',
    birthPlace: 'Mathura',
    hadBrothers: 1,
    wasKing: true
}

var Buddha = {
    name: 'Lord Buddha',
    birthPlace:'Lumbini',
    hadBrothers: 0,
    wasKing: false
}

let lord = new Map()
lord.set('Rama', Rama)
lord.set('Krishna', Krishna)
lord.set('Buddha', Buddha)

//console.log(lord)

//console.log(lord.get('Krishna'))

// console.log(lord.size)

// console.log(lord.keys())
//console.log(lord.values())

/*
for(const key of lord.keys()){
    console.log(key)
} 
*/

/*
for(const value of lord.values()){
    console.log(value)
}
*/

/*
for(const value of lord.values()){
    console.log(value.birthPlace)
}
*/

/*
for(const [key, value] of lord.entries()){
    console.log(key + '=' + value.hadBrothers)
}
*/

lord.forEach((value, key) => console.log(key + '=' + value.birthPlace))