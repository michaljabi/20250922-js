
// Przekazywanie czegoś przez referencje oznacza, że mamy 1 obiekt w pamięci....
// natomiast 2 referencje do niego car oraz car2;
let car = {name: 'A6', manufacturer: 'Audi'};
let car2 = car;

console.log(car)
console.log(car2)

car.manufacturer = 'Mercedes';

console.log(car);
console.log(car2);

car2.manufacturer = 'S302'

console.log(car);
console.log(car2);

console.log(car2 == car)
console.log(car2 === car)

// Typy proste przekazywane są przez wartości
let x = 10;
let z = x;

// z++;
z = z + 1;

console.log(x);
console.log(z);

// Obiekt możemy złożyć z rzeczy które już istnieją:
const point2d = {
    x: x, 
    y: z
}

console.log(point2d);

// żeby na bazie jednego kształtu zrobić KILKA obiektów, wystarczy opakować tworzenie obiektu w FUNKCJĘ

function makeCar(name, manufacturer) {
    return { 
        name: name,
        manufacturer: manufacturer
    };
}

const car3 = makeCar('Audi', 'A6');
const car4 = makeCar('Audi', 'A6');


console.log(car3)
console.log(car4)

car3.manufacturer = 'Mercedes';

console.log(car3)
console.log(car4)

console.log(car3 == car4)
console.log(car3 === car4)