/**
 * Ponieważ JavaScript nie posiada tzw. twardego typowania
 * pozwala nam robić ze zmiennymi "co tylko nam przyjdzie do głowy"
 *
 * Złym pomysłem (przyzwyczajeniem) będzie tutaj:
 *  "dynamiczna zmiana typu zmiennej"
 *
 *  Słowem kluczowym "typeof" możesz łatwo zobaczyć jakiego zmienna jest typu prostego
 */

// najpierw string:
const helloWorld = 'Hello World'
console.log(helloWorld, 'is:', typeof helloWorld)
console.log(`Length of "${helloWorld}" is: ${helloWorld.length}`)

// potem number:
const myLuckyNumber = 12333
console.log(myLuckyNumber, 'is:', typeof myLuckyNumber)
console.log('plus 10 is:', myLuckyNumber + 10)

// potem boolean:
const myFlag = true
console.log(myFlag, 'is:', typeof myFlag)
console.log('AND with true is:', myFlag && true)

// potem undefined:
let notDecided;
console.log(notDecided, 'is:', typeof notDecided)
console.log(notDecided, 'means no value')

// #1 Zadanie:
// Zrefaktoryzuj - zmień powyższe zapisy na poprawny kod, dodając więcej zmiennych przechowujących wartości
// Nie zmieniając tzw. "logiki działania" (to znaczy wszystkie console.log'i zostają i mają pokazywać się tak jak do tej pory)
