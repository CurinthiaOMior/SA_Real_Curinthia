const calc1 = document.getElementById('calc1')
const calc2 = document.getElementById('calc2')
const tensao = document.getElementById('tensao')
const corrente = document.getElementById('corrente')
const resistencia = document.getElementById('resistencia')
calc1.addEventListener('click', () => {
    if (tensao.value && corrente.value && resistencia.value) {
        alert("preencha somente 2 espaços para fazer as contas")
        tensao.value = corrente.value = resistencia.value = ""
    } else if (tensao.value && corrente.value) {
        resistencia.value = tensao.value / corrente.value
    }
    else if (resistencia.value && corrente.value) {
        tensao.value = corrente.value * resistencia.value
    }
    else if (tensao.value && resistencia.value) {
        corrente.value = tensao.value / resistencia.value
    } else {
        alert("preencha no mínimo 2 espaços para fazer a conta")
    }
})
// tesao = corrente * resistencia
// corrente = tesao / resistencia  
const tensao2 = document.getElementById('tensao2')
const corrente2 = document.getElementById('corrente2')
const resistencia2 = document.getElementById('resistencia2')
const resP = document.getElementById('resP')
calc2.addEventListener('click', () => {
    if (tensao2.value && corrente2.value && resistencia2.value) {
        alert("preencha somente 2 espaços para fazer as contas")
        tensao2.value = corrente2.value = resistencia2.value = ""
    } else if (tensao2.value && corrente2.value) {
        resP.innerHTML = `Potencia: ${tensao2.value * corrente2.value} <br> potencia com tesão e corrente`
    }
    else if (corrente2.value && resistencia2.value) {
        resP.innerHTML = `Potencia: ${(corrente2.value * corrente2.value) * resistencia2.value} <br> potencia com corrente e resistencia`
    }
    else if (tensao2.value && resistencia2.vlue) {
        resP.innerHTML = `Potencia: ${(tensao2.value * tensao2.value) * resistencia2.value} <br> potencia com tensão e resistencia`
    } else {
        alert("preencha no mínimo 2 espaços para fazer a conta")
    }
})
// potencia = tesao * corrente
// potencia = (corrente * corrente) * resistencia
// potencia = (tesao * tesao) / resistencia


