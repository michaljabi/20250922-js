// "use strict";
// 💪 DZIEŃ 3 - zadania na start: 🚀


const helloWorld = "hello World!";


// #1 Zadanie:
// Przygotuj funkcję a następnie wywołaj ją
// Niech odnosi się ona do zewnętrznego zakresu i korzysta z helloWorld, pokazując na ekranie
// pierwszy i ostatni znak stringa = 'h!'
// pomocna dłoń?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


function takeFirstAndLastLetter() {
    //  console.log(helloWorld);
    let x = 10
    console.log(helloWorld.at(0) + helloWorld.at(-1));

    console.log(x);

    // ponieważ używam `let` to poza "use strict" - nie "wycieka" x do przestrzeni globalnej (tutaj niżej sprawdzenie)
    console.log(globalThis.x);

    function show410() {
        console.log(x + 400);
    }
    show410();
}

takeFirstAndLastLetter();


// #2 Zadanie:
// Dopisz w środku funkcji zmienną lokalną x = 10

// #3 Zadanie:
// Dopisz w środku tej funkcji inną, która skorzysta i pokaże na ekranie wartość x + 400 (410)

// to jest ESM (Ecma Script Module) - powiemy o tym za chwilę, i to ma "use strict" z "automatu" !!!
// export {};