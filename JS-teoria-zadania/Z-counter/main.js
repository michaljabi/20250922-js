console.log(' HELLO from main.js')

const btn = document.createElement('button')

let n = 100;

btn.innerText = String(n)

btn.addEventListener('click', () => {
    n++;
    btn.innerText = String(n)
})

window.addEventListener('resize', (ev) => {
    console.log('RESIZED!', window.innerWidth, ev.target.innerWidth)
})

document.body.append(btn)