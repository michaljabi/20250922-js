// #1 Zadanie
// Pokaż na konsoli liczby od 1 do 10, jedna pod drugą:
// 1
// 2
// 3
// 4
for(let x = 1; x <= 10; x++) {
    console.log(x)
}

// #2 Zadanie
// Pokaż na konsoli ciąg liczb 1 do 10 jedna obok drugiej:
// 1 2 3 4 5 6 7 8 9 10
const collect = [];
for(let x = 1; x <= 10; x++) {
    collect.push(x);
}
console.log(collect.join(' '));

let line = '';
for(let x = 1; x <= 10; x++) {
    line += x + ' ';
}
console.log(line);