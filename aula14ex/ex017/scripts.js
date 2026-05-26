function gerarTabuada() {
  var numeroVisual = document.getElementById('txtnumero')
  var botaoVisual = document.getElementById('txtgerar')
  var tabuadaVisual = document.getElementById('txttabuada')

  var numero = Number(numeroVisual.value)

  tabuadaVisual.innerHTML = '';

  if(numeroVisual.value == '') {
    alert('O campo número deve ser preenchido')
  }else {
    for(var i = 0; i <= 10; i++ ) {
      var res = i * numero
      const option = document.createElement("option");
      option.text = `${numero} x ${i} = ${numero * i}`;
      tabuadaVisual.appendChild(option);
    }
  }
}