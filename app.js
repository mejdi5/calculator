const display = document.getElementById('display')
const buttons = document.querySelectorAll('button')

buttons.forEach(button => 
    button.addEventListener("click", e => {
        if(e.target.innerHTML === "C") {
            display.innerHTML = ''
        } else if (e.target.innerHTML === "←") {
            display.innerHTML = display.innerHTML.slice(0, -1)
        } else if (e.target.innerHTML === "%") {
            display.innerHTML = typeof Number(display.innerHTML) === 'number' ? display.innerHTML / 100 : "Error !!"
        } else if (e.target.innerHTML === "=") {
            try {
                display.innerHTML = eval(display.innerHTML) || "Error !!"
            } catch (error) {
                display.innerHTML = "Error !!"
            }
        } else {
            display.innerHTML += e.target.innerHTML
        }
}))