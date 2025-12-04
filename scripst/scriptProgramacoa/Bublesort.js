let criarArr = document.getElementById('criarArr')
let ordenarArr = document.getElementById('ordenarArr')
let resArr = document.getElementById('resArr')
let resOrdenar = document.getElementById('resOrdenar')
let arrNumeros = []

function gerarAleatorio() {
    let arr = []
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 20) + 1)
    }
    return arr
}

function bbsort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

criarArr.addEventListener('click', () => {
    arrNumeros = gerarAleatorio()
    resArr.innerHTML = arrNumeros.join(', ')
    resOrdenar.innerHTML = 'Clique em "ordenarArr" para criar o array'
})

ordenarArr.addEventListener('click', () => {
    if (!arrNumeros.length) {
        resOrdenar.innerHTML = 'Primeiro crie um array.'
        return
    }
    let arrOrdenado = bbsort(arrNumeros)
    resOrdenar.innerHTML = arrOrdenado.join(', ')
})