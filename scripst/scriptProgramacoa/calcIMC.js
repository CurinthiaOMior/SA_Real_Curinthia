let inputPeso5 = document.getElementById('inputPeso5')
let inpustAltura5 = document.getElementById('inpustAltura5')
let calc5 = document.getElementById('calc5')
let resIMC5 = document.getElementById('resIMC5')

function caclularIMC5(peso, altura) {
    return (peso / (altura * altura)).toFixed(2)
}

calc5.addEventListener('click', () => {
    let peso = Number(inputPeso5.value)
    let altura = Number(inpustAltura5.value)
    let imc = caclularIMC5(peso, altura)
    resIMC5.innerHTML = 'IMC: ' + imc
})
