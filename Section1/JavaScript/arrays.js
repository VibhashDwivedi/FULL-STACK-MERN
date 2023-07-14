const myarr=[234, 'nice', 73.55, true, console.log, [23,25]];

console.log(myarr.length);
console.log(typeof myarr);

const movies = ['Avengers', 'Flash', 'Pushpa', 'War', 'Jawaan', 'FastX', 'OMG'];
console.log(movies[2]);
console.log(movies[100]);
console.log(movies.at(-2));
console.log(movies.indexOf('Flash'));

//Slicing
console.log(movies.slice(2,6));
console.log(movies.slice(2));
console.log(movies.slice(-4));

//adding new elements
movies.push('shershah');
movies.unshift('Avatar');
console.log(movies);

//Removing elements
movies.pop();
movies.shift();
console.log(movies);
movies.splice(3,2);
console.log(movies);

//spread operator
console.log([...movies,'Batman' ,'Batman2', 'Batman3']);
//write syntax to exclude element on index 4 using slice function 
console.log([...movies.slice(0,4),...movies.slice(5)]);