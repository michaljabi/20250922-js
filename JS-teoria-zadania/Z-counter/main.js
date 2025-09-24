console.log(' HELLO ')

const btn = document.createElement('button')

let n = 100;

btn.innerText = n

btn.addEventListener('click', () => {
    console.log('Klik!')
    n = n + 1;
    btn.innerText = n
})

document.body.append(btn)