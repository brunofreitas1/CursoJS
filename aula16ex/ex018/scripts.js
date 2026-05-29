let valores = []
let num = document.getElementById('txtnumero')
let lista = document.getElementById('txtanalise')
let res = document.getElementById('res')
let resf = document.getElementById('resf')
let soma = 0

function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l){
  if (l.indexOf(Number(n)) != -1) {
    return true
  }else {
    return false
  }
}

function adicionar(){
  if (isNumero(num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value))
    let option = document.createElement("option")
    option.text = `Valor ${num.value} adicionado.`
    lista.appendChild(option)
    soma += Number(num.value)
    resf.innerHTML = ''
  }else {
    window.alert(`Valor inválido ou já encontrado na lista.`)
  }
  num.value = ''
  num.focus()
}

function finalizar(){
  let maior = Math.max(...valores)
  let menor = Math.min(...valores)
  let media = soma / valores.length

  if(valores.length == 0){
    window.alert(`Adicione valores para finalizar!`)
  }else{

  resf.innerHTML = ``

  resf.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados</p>`
  resf.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
  resf.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
  resf.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
  resf.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
  }
}
