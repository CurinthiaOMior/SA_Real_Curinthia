let gerarMatriz2 = document.getElementById('gerarMatriz2')
let resMatriz2 = document.getElementById('resMatriz2')

function gerarAleatorio2() {
    return Math.floor(Math.random() * 20) + 1
}

function funcGerarMatriz2() {
    let matriz = []
    for (let i = 0; i < 3; i++) {
        let linha = []
        for (let j = 0; j < 3; j++) {
            linha.push(gerarAleatorio2())
        }
        matriz.push(linha)
    }
    return matriz
}

gerarMatriz2.addEventListener('click', () => {
    let matriz = funcGerarMatriz2()

    resMatriz2.innerHTML = `
        <table>
            <tr style="display: flex; align-itens: center; justify-content: space-between; gap: 0.5rem;">
                <td "p-2">${matriz[0][0]}</td>
                <td "p-2">${matriz[0][1]}</td>
                <td "p-2">${matriz[0][2]}</td>
            </tr>
            <tr style="display: flex; align-itens: center; justify-content: space-between; gap: 0.5rem;">
                <td "p-2">${matriz[1][0]}</td>
                <td "p-2">${matriz[1][1]}</td>
                <td "p-2">${matriz[1][2]}</td>
            </tr>
            <tr style="display: flex; align-itens: center; justify-content: space-between; gap: 0.5rem;">
                <td "p-2">${matriz[2][0]}</td>
                <td "p-2">${matriz[2][1]}</td>
                <td "p-2">${matriz[2][2]}</td>
            </tr>
        </table>
    `
})