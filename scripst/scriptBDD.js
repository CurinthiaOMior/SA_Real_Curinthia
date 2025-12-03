const tabela = document.getElementById('tabela')
const btnAdicionar = document.getElementById('btnAdicionar')

const nome = document.getElementById('nome')
const idade = document.getElementById('idade')
const cidade = document.getElementById('cidade')

let contador = 1

btnAdicionar.addEventListener("click", ()=>{
    if(!nome.value && !idade.vale && !cidade.value){
        alert(`preencha todos os requisitos`)
    }else{
    tabela.innerHTML += `
    <tr>
            <td>${contador++}</td>
            <td>${nome.value}</td>
            <td>${idade.value}</td>
            <td>${cidade.value}</td>
    </tr>
    `
    }
})
