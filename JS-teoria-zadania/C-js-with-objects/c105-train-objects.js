
const fruits = ['cherry', 'apple', 'banana'];
const name = 'Fruit shop'

function greetings() {
	return 'welcome!'
}

/* #1 Zadanie:
	 Utwórz obiekt shop
	 który będzie posiadał pola: fruits name greetings
	 mają one mieć te same wartości co rzeczy zadeklarowane powyżej
*/

const shop = {
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#property_definitions
	fruits, // lukier składniowy, object property shorthand
	name: name,
	greetings: greetings
};

// debugger;

console.log(shop);
console.log(shop.name);
console.log(shop.greetings);

// #2 Zadanie:
// pokaż na konsoli napis "banana welcome!" używając danych z obiektu
console.log(`${shop.fruits.at(-1)} ${shop.greetings()}`)



// -- potem -> rise hand!



// #3 Zadanie:
// utwórz 2 obiekt concurrentShop który będzie klonem poprzedniego (zadeklaruj z tymi samymi wartościami)
// dodatkowo będzie miał również metodę showBanner - która zwróci "here prices are the lowest!"
const concurrentShop = {
	fruits,
	name, 
	greetings,
	showBanner() {
		return "here prices are the lowest!";
	}
}
console.log(concurrentShop.showBanner());

// #4 Zadnie:
// Pokaż na konsoli wszystkie nazwy pól obiektu shop

// 4.1 rozwiązanie:
for(const property in shop) {
	console.log(property);
}

// 4.2 rozwiązanie:
console.log(Object.keys(shop))

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
console.log(Object.keys(shop).join(' '));

for(const key of Object.keys(shop)) {
	console.log(key);
}

// export {};