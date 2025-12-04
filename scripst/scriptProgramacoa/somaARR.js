let criarArr3 = document.getElementById('criarArr3')
let soma3 = document.getElementById('soma3')
let resArr3 = document.getElementById('resArr3')
let resSoma3 = document.getElementById('resSoma3')

let arrNumeros3 = []

function gerarAleatorio3(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random() * 220) + 1)
    }
    return arr
}

function somarArr3(arr) {
    let soma = 0
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i]
    }
    return soma
}

criarArr3.addEventListener('click', () => {
    arrNumeros3 = gerarAleatorio3(10)
    resArr3.innerText = arrNumeros3.join(', ')
    resSoma3.innerText = 'Clique em "Somar" para ver o resultado'
})

soma3.addEventListener('click', () => {
    if (!arrNumeros3.length) {
        resSoma3.innerText = 'Primeiro crie um array.'
        return
    }

    let soma = somarArr3(arrNumeros3)
    resSoma3.innerText = 'Soma total: ' + soma
})