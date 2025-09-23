// #1 Zadanie:
// Napisz funkcję, która wyświetli na ekranie napis: 'Witaj Nieznajomy'
// wywołana bez argumentu
// wywołana z argumentem 'Michał' wyświetli napis: 'Witaj Michał'
// Zastanów się nad poprawnymi nazwami funkcji i jej parametru

function say(a = 'Nieznajomy') {
    // console.log('Witaj', a, 9)
    // console.log('Witaj ' + a + ' ' + 9)
    console.log(`Witaj ${a}`)
}

say()
say('Michał')