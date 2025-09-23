const cars = [
    { name: 'A6', manufacturer: 'Audi' },
    { name: 'A6', manufacturer: 'Audi' },
    { name: 'A6', manufacturer: 'Mercedes' },
    // null // UWAGA- piluj żeby obiekty w tablicy miały ten sam kształt !
]

for(const c of cars) {
    console.log(c);
    // c.manufacturer = 'Mercedes';

    if(c.manufacturer === 'Mercedes') {
        c.name = 'S'
    }
}


console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

// console.log(null.manufacturer)