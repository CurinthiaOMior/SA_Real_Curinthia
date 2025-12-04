let criarArr4 = document.getElementById('criarArr4')
let buscarNum4 = document.getElementById('buscarNum4')
let alvoBusca4 = document.getElementById('alvoBusca4')
let resArr4 = document.getElementById('resArr4')
let resBusca4 = document.getElementById('resBusca4')

let arrNumeros4 = []

function gerarArrayAleatorio6() {
    let arr = []
    for (let i = 0; i < 8; i++) {
        arr.push(Math.floor(Math.random() * 30) + 1)
    }
    return arr
}

function buscaLinear6(arr, valor) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valor) {
            return i
        }
    }
    return -1
}

criarArr4.addEventListener('click', () => {
    arrNumeros4 = gerarArrayAleatorio6()
    resArr4.innerHTML = arrNumeros4.join(', ')
    resBusca4.innerHTML = 'Digite um número e clique em "Buscar"'
})

buscarNum4.addEventListener('click', () => {
    if (!arrNumeros4.length) {
        resBusca4.innerHTML = 'Primeiro crie um array.'
        return
    }

    let valor = Number(alvoBusca4.value)
    if (isNaN(valor)) {
        resBusca4.innerHTML = 'Digite um valor que está no array.'
        return
    }

    let indice = buscaLinear6(arrNumeros4, valor)
    if (indice === -1) {
        resBusca4.innerHTML = 'Digite um valor que está no array.'
    } else {
        resBusca4.innerHTML = 'Valor encontrado na posição ' + (indice + 1) + '.'
    }
})
