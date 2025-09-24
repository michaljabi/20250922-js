function s(a,b){ return a+b };


console.log(s(10, 2));


const S=(a,b)=>a+b; // arrow function 

console.log(S(10,3))


// Wiemy że:

const name = 'Michał';

console.log(name);

const user = { name };

console.log(user);

// Function declaration
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
function say(sth = '') {
    return 'I say ' + sth; 
}
// console.log(say('Hello'))

// Function expression (wyrażenie funkcji)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
const say2 = function(sth = '') {
    return  'I say ' + sth; 
}
//console.log(say2('Hello'))

// Po 2015 dostajemy lukier składniowy do wyrażenia funkcji -> Arrow function expression;

const say3 = (sth = '') => {
    return 'I say ' + sth; 
}
console.log(say3('Hello'))

// albo prosciej:
const say4 = (sth = '') => 'I say ' + sth; 

console.log(say4('Hello'))


// wyświetl napis po 3 sekundach.... (3000ms)
setTimeout(() => {
    console.log('Napis po 3 sekundach...')
}, 3000)

function complex() {
    console.log('Complex fired!')
}


setTimeout(complex, 5000);
