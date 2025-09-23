// To się wyjaśni jak rozpracujemy `a301` scopes (zakresy);
let id = 0;


function makeCartItem(name = '', price = 0, tax = 0.23) {
	// let id = 0; `a301` scopes (zakresy)
	id++;
	return {
		// id: Math.floor(Math.random() * 100),
		id: id,
		name: name,
		price: price,
		tax: tax
	}
}

/* #1 Zadanie:
Zdefiniuj i przypisz obiekt shoppingCartItem z polami:
	name (typu :string)
	price (typu :number)
	tax (typu :number)

	Samodzielnie wymyśl ich wartości
*/

const shoppingCartItem = makeCartItem('Phone', 1000);

// {
// 	name: 'Phone',
// 	price: 1000,
// 	tax: 0.23
// };

/* #2 Zadanie:
Zdefiniuj i przypisz obiekt shoppingCartItem2 z polami:
	name (typu :string)
	price (typu :number)
	tax (typu :number)

	Samodzielnie wymyśl ich wartości

Pokaż w console.log sumy cen(price) i podatków(tax) obydwu produktów jako wartość koszyka
*/

const shoppingCartItem2 =  makeCartItem('Laptop', 2000);
// {
// 	name: 'Laptop',
// 	price: 2000,
// 	tax: 0.23
// };

console.log(shoppingCartItem.id);
console.log(shoppingCartItem2.id);

const nettoPrice = shoppingCartItem.price + shoppingCartItem2.price;

console.log(nettoPrice);

const taxes = shoppingCartItem.price * shoppingCartItem.tax + shoppingCartItem2.price * shoppingCartItem2.tax;

console.log(taxes);

const grossVolume = nettoPrice + taxes;

console.log(`Wartość koszyka to ${nettoPrice} zł netto, co daje ${grossVolume} zł brutto.`)


// #3 Wykaż, że zainicjowanie dwóch nowych pustych obiektów po porównaniu === da nam wartość false.
// Wyjaśnij dlaczego tak się dzieje

console.log( {} === {} );