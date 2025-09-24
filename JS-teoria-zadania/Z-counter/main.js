console.log(' HELLO from main.js')

const btn = document.createElement('button')

let n = 100;

btn.innerText = String(n)

btn.addEventListener('click', () => {
    n++;
    btn.innerText = String(n)
})

document.body.append(btn)