/**
 *  Jeśli chodzi o instrukcje warunkowe, rozróżniamy:
 *
 *  if()
 *  else if()
 *  else
 *
 *  switch
 *
 *  ternary operator
 *
 *  możemy również wykorzystać operatory logiczne
 *
 *
 * Uwaga:
 * W JavaScript musimy uważać na porównania.
 * Trzeba używać === znaku porównania
 *
 * zobacz
 * https://dorey.github.io/JavaScript-Equality-Table/
 * */




let numericCondition = 10;

console.log(numericCondition);
console.log(!numericCondition);

console.log(!0);
console.log(!'');
console.log(!{});
console.log(!null);

console.log(!Boolean(numericCondition));

if(numericCondition === 1 || numericCondition === 10) {
	console.log('if !')
} else if (numericCondition){
	console.log('else if !')
} else {
	console.log('else !?')
}


const x = 10;
const higherThen10 = x > 10;
const hello = higherThen10 ? 'witaj' : 'żegnaj';
console.log(hello);

switch(hello) {
	case 'witaj':
		console.log('logika do witaj...');
		break;
	case 'żegnaj':
	case 'żegnaj szkoło!':
		console.log('logika do witaj...');
		break;
	default:
		console.log('Nieznana wartość')
}


// #1 Zadanie
// Sprawdź jaką wartość będzie miało hello jeśli zmienisz x na mniejsze niż 10
// Dlaczego tak się dzieje

// #2 Przygotuj własny console.log z który napisze "take a " oraz "coat" lub "t-shirt"
// w zależności od zmiennej weather która może przyjąć wartości "windy" oraz "sunny"
// wykorzystaj ternary operator

let weather = 'windy';

console.log('take a', weather === 'sunny' ? 't-shirt' : 'coat' )






// #3 Zadanie:
// Jaką wartość przyjmie name poniżej?
// dlaczego tak się dzieje?


const name = 0 || false || '' || 'Jacek' || '?' || '??'

console.log(name)

// #4 Zadanie:
// Popraw isFinal oraz profile tak aby otherName posiadało wartość "Grażyna"

const isFinal = true;
const profile = ' ';
const otherName = profile && isFinal && 'Grażyna'

console.log(otherName);
