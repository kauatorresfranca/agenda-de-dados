const form = document.getElementById('formulario')
let linhas = ''
let array = []

form.addEventListener('submit', function(e){
    e.preventDefault()
    adicionalista()
    atualizalista()
})

function adicionalista(){
    
    let nome = document.getElementById('nome-usuario')
    let telefone = document.getElementById('telefone-usuario')
    if (array.includes(telefone.value)){
        alert('esse numero já está registrado!')
    }
    else{
    let linha = '<tr>'
    linha += `<td>${nome.value}</td>`
    linha += `<td>${telefone.value}</td>`
    linha += '</tr>'
    linhas += linha
    array.push(telefone.value)
    nome.value = ''
    telefone.value = ''
}
}

function atualizalista(){
    const corpotabela = document.getElementById('corpo')
    corpotabela.innerHTML = linhas
}

