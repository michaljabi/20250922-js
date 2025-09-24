
// PROVIDER:
function getVatTaxRateFromServer(calculations = (value = 0) => {}) {
	// console.log(calculations);
	calculations(0.23)
	// setTimeout(() => {
	// 	calculations(0.23)
	// }, 4000 * Math.random())
	// calculations(0.1)
}

// #1 Zadanie:
// Odbierz wartość `0.23` i wyświetl na konsoli, nie modyfikując kodu powyżej


function getTax(value) {
	console.log(value);
}

// tutaj pokaż 0.23
// CONSUMER 1
getVatTaxRateFromServer(getTax)

// CONSUMER 2
getVatTaxRateFromServer((value) => {
	console.log(value);
})