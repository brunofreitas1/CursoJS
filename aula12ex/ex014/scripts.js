function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'manha.png'
    document.body.style.background = 'rgb(247, 235, 204)'
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = 'tarde.png'
    document.body.style.background = 'rgb(252, 196, 124)'
  } else {
    //BOA NOITE!
    img.src = 'noite.png'
    document.body.style.background = 'rgb(75, 76, 133)'
  }
}

carregar();
