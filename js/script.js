// Funçoes auxiliares ou uteis
const seleciona = (elemento) => document.querySelector(elemento)
const selecionaTodos = (elemento) => document.querySelectorAll(elemento)

const abrirModal = () => {
    seleciona('.pizzaWindowArea').style.opacity = 0
    seleciona('.pizzaWindowArea').style.display = flex
    setTimeout(() => {
        seleciona('.pizzaWindowArea').style.opacity = 1
    }, 150)
}

const fecharModal = () => {
    seleciona('.pizzaWindowArea').style.opacity = 0
    setTimeout(() => {
        seleciona('.pizzaWindowArea').style.display = 'none'
    }, 500)
}

const botoesFechar = () => {
    //BOTOES FECHAR MODAL
    selecionaTodos('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
        item.addEventListener('click', fecharModal)
    })
}

const preencheDadosPizzas = (pizzaItem, item) => {
    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
}

const preencheDadosModal = () => {
    seleciona('.pizzaBig img').src = item.img
    seleciona('.pizzaInfo h1').innerHTML = item.name
    seleciona('.pizzaInfo--desc').innerHTML = item.description
    seleciona('.pizzaInfo--actualPrice').innerHTML = `R$ ${item.price.toFixed(2)}`
}

pizzaJson.map((item, index ) => {
    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true)
    
    seleciona('.pizza-area').append(pizzaItem)

    // preencher os dados de cada pizza
    preencheDadosPizzas(pizzaItem, item)

    // Pizza clicada
    pizzaItem.querySelector('.pizza-item a').addEventListener('click', (e) => {
        e.preventDefault()
        console.log('Clicou na pizza')

        //abrir janela MODAL
        abrirModal()

        //Preenchimento dos dados ao abrir a modela modal
        preencheDadosModal(item)
    })

    // Cancelando a janela modal ao clicar no botao CANCELAR
    document.querySelector('.pizzaInfo--cancelButton').addEventListener('click', () => {
        document.querySelector('.pizzaWindowArea').style.display = 'none'
    })

    botoesFechar()

})
