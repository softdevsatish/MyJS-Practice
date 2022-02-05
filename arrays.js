// const marvelHeroes = ['Ironman', 'Spiderman', 'Capt. America', 'Thanos', 'Black Widow', 'Hulk', 'Thor']
// console.log(marvelHeroes);
// console.log(marvelHeroes[0]);
// console.log(marvelHeroes[1]);
// console.log(marvelHeroes[6]);
// console.log(marvelHeroes[7]);
// console.log(marvelHeroes.length);
// console.log(marvelHeroes[marvelHeroes.length-4]);
// console.log(`There are ${marvelHeroes.length} total super heroes here.`);

const numbers = ['One', 'Two', 'Three', 'Four', 'Five']

/*Replace element of index 1*/
// numbers[1]='2'
// console.log(numbers);

/*Delete element of Index 0 */
// numbers.shift()
// console.log(numbers);

/*Show here shifted element by just above code*/
// console.log(numbers.shift());


/* Add new element in starting of array*/
// numbers.unshift('Zero')
// console.log(numbers);



/* Remove element from last index of array*/
// numbers.pop()
// console.log(numbers);


/*Add new element in last of array*/
// numbers.push('Six')
// console.log(numbers);

/*Delete one element start from index 2*/
// numbers.splice(2,1)
// console.log(numbers);

/*Delete two element start from index 2*/
// numbers.splice(2,2)
// console.log(numbers);


/*Delete two element start from index 2 and add one new element on deleted index 2*/
numbers.splice(2,2,'New Three')
console.log(numbers);
