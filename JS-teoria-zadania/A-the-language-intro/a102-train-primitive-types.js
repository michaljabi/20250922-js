
let x = 3;
// let x = 202; // tak nie można bo to runtime exception "redeklarowanie zmiennej"

x = 2;

console.log(x / 2);

// x = '?';  TAK NIE RÓB - bo zmieniasz typ ! a nie tylko wartość

console.log(x / 2 + 10 + 21 + 212)

console.log('???' + 20);

console.log('1' + 20);
console.log(1 + 20);
console.log(20 + 1);
console.log(20 + '1');



const y = 3;

// console.log(Number.MAX_SAFE_INTEGER);

console.log(y);
// y = 3; // Favor const over "let" !
console.log(y)
console.log(typeof y)

// console.log(Math.PI)

// x = 10;


// Dobre praktyki:
// 1. Favor `const` over `let` - ale jak potrzebujesz to stosuj `let` tylko pilnuj TYPU!
// 2. Od razu przypisuj wartości zmiennej - tak żeby ustalić jej typ! (wtedy TypeScript podpowie Ci co wywnioskował)
// 3. NIGDY nie zmieniaj dynamicznie typu zmiennej (jak zaczynasz `number` zostaje `number`);

// #1 Zadanie:
// Pokaż wynik dodawania x i y (oczekiwane: 5)
console.log(x + y)
console.log(y + x)

console.log(2 + 3);

// console.log(2 / 0);


// #2 Zadanie:
// Pokaż wynik potęgowania x do 3 (lub x do y) (oczekiwane: 8)

console.log(x ** y);
console.log(Math.pow((((x))), y))


console.log(Math.PI)
// console.log(X ** Y);
// console.log(math)

// Te linie są zahardkodowane bo zmiana w `y` nie spowoduje zmiany wyniku!
console.log(x ** 3);
console.log(x * x * x);

//------------------------------------------------------------
const hello = 'Hello'
const almostWorld = 'Almost World';

// () => {}

// #3 Zadanie:
/*
	Pokaż wynik dodawania hello + almostWorld
    Tak aby na konsoli pokazał się napis "Hello World"
    użyj odpowiedniej metody wbudowanej na stałej almostWorld (!)
*/
console.log(hello + almostWorld)
console.log(hello + almostWorld.substring(6))
console.log(hello + almostWorld.slice(-6))
console.log(hello + almostWorld.slice(6))

console.log(almostWorld.slice(0, 4))
console.log(almostWorld.substring(0, 4))

console.log(hello + ' ' + almostWorld.slice(-5))

console.log("Henry's")

console.log('Henry\'s')

console.log(' "title" ')


console.log(`?
    
    
    
    
                                          ?`)


console.log(`2 + 2 = ${2+2}`)

console.log(`${hello} ${almostWorld.slice(-5)}`)

//------------------------------------------------------------
let isAnAdmin = true;
console.log(isAnAdmin)
isAnAdmin = false;
console.log(isAnAdmin)

console.log(true && true);
console.log(true && false);

console.log(true || false);
console.log(false || false);

// #4 Zadanie
// Odkomentuj i napraw błąd w linii z kodem "isAnAdmin = false"
// Powinieneś zobaczyć następujący wynik na konsoli:
// true
// false
