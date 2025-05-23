const form = document.getElementById('form')
const inputName = document.getElementById('nomeProduto')
const inputPreco = document.getElementById('preco')
const inputCategoria = document.getElementById('categoria')
const btnEnviar = document.getElementById('btnEnviar')
const mensagem = document.getElementById('mensagemErro')
const cadastro = document.getElementById('cadastroProdutos')

btnEnviar.addEventListener('click', function(event){
    event.preventDefault()

    let nome = inputName.value
    let precoStr = inputPreco.value.trim()
    let preco = Number(precoStr)
    let categoria = inputCategoria.value

    if(nome === ''| precoStr === '' | categoria === ''){
        mensagem.textContent = 'Preencha todos os campos!'
        mensagem.style.color = '#FF0000'
        return
    }

    if(preco <= 0){
        mensagem.textContent = 'Preço deve ser maior que zero.'
        return
    }

    if (!precoStr.includes('.') ) {
        mensagem.textContent = 'Preço deve conter duas casas decimais.'
        return
    }

    if(categoria === 'tecnologia'){
        const cardProdutos = document.createElement('div')
        cardProdutos.innerHTML = `
        <p>Produto: ${nome}<p>
        <p>Preço: ${preco}</p>
        <p>Categoria: <strong>${categoria}</strong></p>
        `
        cadastro.append(cardProdutos)
    }
    else if(categoria === 'alimentos'){
        const cardProdutos = document.createElement('div')
        cardProdutos.innerHTML = `
        <p>Produto: ${nome}<p>
        <p>Preço: ${preco}</p>
        <p>Categoria: ${categoria}</p>
        `
        cardProdutos.style.backgroundColor = 'yellow'
        cadastro.append(cardProdutos)
    }
    else{
        const cardProdutos = document.createElement('div')
        cardProdutos.innerHTML = `
        <p>Produto: ${nome}<p>
        <p>Preço: ${preco}</p>
        <p>Categoria: ${categoria}</p>
        `
        cadastro.append(cardProdutos)
    }

    
    
    form.reset() 
    mensagem.textContent = ' '
})