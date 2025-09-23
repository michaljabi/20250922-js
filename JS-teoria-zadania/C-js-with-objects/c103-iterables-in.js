/**
 *  Kolekcje iterowalne - to takie konstrukcje po których można "przeliczać"/"wyliczać" pętlami.
 *
 *  Przykładowo, najprostsza kolekcja iterowalna w JavaScript to po prostu String
 * */

const movie = 'Ender\'s Game';
console.log(movie[0]);
console.log(movie.length);

for(let x = 0; x < movie.length; x++) {
	console.log(movie[x])
}
// console.log(x);

// 
let y = 20;
y = y + 10; // można krócej: y += 10;

// y += 4;
console.log(y)

let z = 20;
z += 10;

console.log(z);

const numbers = [];
for(let x = 2; x <= 20 ; x += 5) {
	numbers.push(x);
}
console.log(numbers);

/**
 * W ES6 dostajemy wygodniejszą pętle do przeliczania dowolnej kolekcji iterowalnej
 * for...of
 * */

for(let letter of 'Fight Club') {
	console.log(letter)
}

// #1 Zadanie:
// Udowodnij że pętli for...of możemy również użyć do tablic
for(const x of ['?' , '!' , '*', '😭']) {
	console.log(x);
}