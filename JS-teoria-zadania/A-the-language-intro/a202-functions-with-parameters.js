
/**
 *  Funkcje mogą być deklarowane z tzw. parametrami.
 *  Są to zapisy odnoszące się do argumentów (danych) przekazanych do funkcji.
 *
 *  Można ich zdefiniować teoretycznie "nieskończenie wiele"
 *  stosując odpowiedni zapis z operatorem rest "..."
 *
 *  Jednak w praktyce nie chcemy żeby tych parametrów było więcej jak 5-7.
 *  Dla czytelności naszego kodu i wygody jego używania.
 *
 *
 *  W momencie deklarowania litery a i b to "parametry"
 *
 *  natomiast przesyłane dane "10" i "20" nazywamy argumentami
 */

// Deklaracja:
function sumNumbers(a = 0, b = 0, c = 0) { // a i b to parametry
	//console.log(a)
	//console.log(b)
	return a + b + c
}

console.log( sumNumbers(450, 200, 100) )
console.log( sumNumbers(10, 20) )
// console.log( 10 + 20 + undefined )
console.log( sumNumbers(30, 560) )

const computation = sumNumbers();

console.log(computation)
console.log(undefined + undefined);

// Uważaj jakie dostarczasz Argumenty!
/*
const word = sumTwoNumbers('sło', 'wo')

console.log(word);
console.log('sło' / 'wo');
*/


// Musisz pilnować sie z ilością argumentów które przekazujesz :(
// sumTwoNumbers(2, 3, 1,9, 3, 2, 1, 12,312, 3123, 123, 123,12 ,123);

// console.log(sumTwoNumbers instanceof Function)
// console.log(sumTwoNumbers instanceof Object)

// Wywołanie:
const result = sumNumbers(10, 20) //arguments  10 i 20 to argumenty


// #1 Zadanie:
// Pokaż wynik dodawania 10 + 20 na ekranie
console.log(result)
console.log( sumNumbers(10, 20) )

// #2 Zadanie:
// Policz ile to 30 + 560
console.log( sumNumbers(30, 560) )

// #3 Zadanie:
// co jeśli byśmy mieli policzyć 450 + 200 + 100 ?

console.log(450 + 200 + 100);


console.log( sumNumbers(sumNumbers(450, 200), 100) )


const partialSum = sumNumbers(450, 200);
const myResult = sumNumbers(partialSum, 100)
console.log(myResult);

/* ---------------------- */
// Funkcje po 2015 roku mogą posiadać parametry domyślne:

function greetings(user = 'Admin') {
	console.log('Hello', user)
}

// #4 Zadanie:
// spróbuj wywołać greetings z argumentami i bez argumentu, co się stanie ?
greetings()
greetings('Michał')

// #5 Zadanie:
// Po wykonaniu zadania #4 usuń domyślną wartość user - co się stanie ?
