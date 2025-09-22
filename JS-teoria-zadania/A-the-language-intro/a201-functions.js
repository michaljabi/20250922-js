/**
 *  Funkcje - to jedne z podstawowych elementów bez których nie można mówić
 *  o zbudowaniu aplikacji.
 *
 *  Po 1 pozwalają zamknąć wykonywany kod w postaci procedur.
 *  Mówiąc prościej: unikami powtórzeń, ponieważ coś co napisaliśmy możemy wywołać kilka razy
 *  Dzięki użyciu funkcji
 *
 *  Po 2 są w stanie przeliczać dane w zdefiniowany przez nas sposób. Posiadając dane wejściowe
 *  Input - generują dane wyjściowe - Output.
 *
 */

let x = 1;
x = 10;

const $_xAZaz09_$ = 2;

// Deklaracja:
function sayHello() {
	console.log('Witaj!')
}

// Wywołanie:
sayHello()


// #1 Zadanie:
// Jak szybko powtórzyć te zapisy 4 razy na ekranie:
// chcemy widzieć 4 pudełka jedno pod drugim

function showTheBox() { // Function declaration - deklarowanie funkcji
	console.log('  ____________')
	console.log('|  in the box  |')
	console.log('  ------------')
	// return '1bc'
}

showTheBox(); // to jest function CALL - wywołanie funkcji
showTheBox();
showTheBox();

const result = showTheBox();

console.log(result)