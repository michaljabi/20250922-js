const obj = new Object({});

// tak robimy:

const objLit = {}; // literał obiektowy (lukier składnowy do definiowania nowy obiektów = skrócony zapis);

// ---------

const arr = new Array(0);

// tak robimy:
const arrLit = []; // literał tablicowy (lukier składnowy do definiowania nowych tablic = skrócony zapis);



// taki zapis jest możliwy jesli wyrażenie regularalne robimy za pomocą wartości string.
const reg = new RegExp('\\d');

console.log(reg.exec('abcde'))

console.log(reg.exec('coś 2'))

const regLit = /\d/ //literał regExpowy (wyrażenie regularne)

// WSZELKIE POZOSTAŁE OBIEKTY Natywne - nie mają na ten moment literałów (lukru składniowego)

console.log(new Date().toISOString());
console.log(new Date().toString());

console.log(new Date('2025-09-23T02:00:00Z').toString());



console.log(new Error('Coś poszło nie tak'));

console.log('...');