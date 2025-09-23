/**
 * Tutaj testujemy zachowanie kolejnych poziomów w przypadku zakresów (SCOPES);
 *
 *
 * #1 Zadanie:
 * Idąc od wewnątrz (fourthDream) do zewnątrz (inception)
 * Komentuj po kolei stałą nazwaną: "myColor"
 * (najpierw linia 24 potem 21 etc... aż do 12)
 *
 * Zobacz jak zachowuje się i co pokazuje console.log z linii 28
 *
 * */
console.log(globalThis)

// const myColor = 'red';

function inception() {
	// const myColor = 'cristal';

	function secondDream() {
		// const myColor = 'sapphire';

		function thirdDream() {
			// const myColor = 'emerald';

			function fourthDream() {
				// const myColor = 'diamond';
				globalThis.myColor = 'red'

				console.log(myColor);
			}
			fourthDream();
		}
		thirdDream();
	}
	secondDream();
}
inception();
