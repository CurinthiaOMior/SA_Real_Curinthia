let celcius7 = document.getElementById('celcius7')
let far7 = document.getElementById('far7')
let inputTemp7 = document.getElementById('inputTemp7')
let resTemp7 = document.getElementById('resTemp7')

celcius7.addEventListener('click', ()=>{
    resTemp7.innerHTML = `Temperatura convertida de fahrenheit para celcius: ${(((inputTemp7.value - 32) * 5) / 9).toFixed(2)}`
})

far7.addEventListener('click', ()=>{
    resTemp7.innerHTML = `Temperatura convertida de celcius para fahrenheit: ${((inputTemp7.value * 9) / 5 + 32).toFixed(2)}`
})