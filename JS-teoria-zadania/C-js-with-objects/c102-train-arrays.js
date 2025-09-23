// #1 Zadanie:
// Zadeklaruj nową tablicę z numerami 1 do 8
// Wyrzuć z niej pierwszą i ostatnią wartość
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers.length)
numbers.pop();
numbers.shift();

console.log(numbers);
console.log(numbers.length);

// #2 Zadanie:
// Pokaż na konsoli "jedno pod drugim" wynik mnożenia pól tej tablicy przez 3
for(const num of numbers) {
    console.log(num * 3)
}

console.log(numbers);

// #3 Zadanie:
// Sprawdź w dokumentacji metodę "indexOf" dla tablic. Jak ją użyć? Pokaż przykład zastosowania
console.log(numbers.indexOf(5))
console.log(numbers.indexOf(2))
console.log(numbers.indexOf(22))

// #4 Zadanie:
// Pokaż na konsoli 1-wszy i ostatni element tablicy (jeden pod drugim)
console.log(numbers[0])

console.log(numbers.length)
console.log(numbers.length-1)

console.log(numbers[numbers.length-1])

console.log(numbers.at(-1))

// metoda .at() też jest dla strings:
console.log('hello'.at(-1))
console.log('hello'.at(0))