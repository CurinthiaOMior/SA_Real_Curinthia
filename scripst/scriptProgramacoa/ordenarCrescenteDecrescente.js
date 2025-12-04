let ordenarDcres6 = document.getElementById('ordenarDcres6')
let ordenarCres6 = document.getElementById('ordenarCres6')
let gerarArr6 = document.getElementById('gerarArr6')
let arr6 = document.getElementById('arr6')
let arrnum6 = []
function gerarAleatorio6(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
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
gerarArr6.addEventListener('click', ()=>{
    arrnum6 = gerarAleatorio6(10) 
    arr6.innerHTML = arrnum6.join(", ")
})
ordenarCres6.addEventListener('click', ()=>{
    arrnum6.innerHTML = bbsort(arrnum6)
})
ordenarDcres6.addEventListener('click', ()=>{
    arrnum6.innerHTML = bbsort(arrnum6).reverse()
})
