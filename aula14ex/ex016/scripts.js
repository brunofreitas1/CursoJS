function contar(){
  var inicioVisual = document.getElementById('txtinicio')
  var fimVisual = document.getElementById('txtfim')
  var passoVisual = document.getElementById('txtpasso')
  var contagem = document.getElementById('contagem')

  var inicio = Number(inicioVisual.value)
  var fim = Number(fimVisual.value)
  var passo = Number(passoVisual.value)

  if (isNaN(inicio) || isNaN(fim) || inicio.value) {
    contagem.innerText = 'Erro: início ou fim inválido.'
    return
  }

  if (!passo || passo <= 0) {
    passo = 1
  }

  contagem.innerHTML = 'Contando: <br>'

  if (inicio <= fim) {
    for(var i = inicio; i <= fim; i += passo){
      contagem.innerText += i + ' ➡️ '
    }
  } else {
    for (var i = inicio; i >= fim; i -= passo) {
      contagem.innerHTML += i + ' ➡️ '
    }
  } 

  contagem.innerHTML += '🏁'
}
