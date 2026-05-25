function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    if (fsex[0].checked) {
      genero = "Homem"
      if(idade >= 0 && idade < 10){
        //Criança
        img.setAttribute('src', 'bebehomem.png')
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.height = '250px'
      }else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'jovemhome.png')
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.height = '250px'
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'homemadulto.png')
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.height = '250px'
      } else {
        //Idoso
        img.setAttribute('src', 'idosohomem.png')
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.height = '250px'
      }
    }else if (fsex[1].checked) {
      genero = 'Mulher'
      if(idade >= 0 && idade < 10){
        //Criança
        img.setAttribute('src', 'bebemulher.png')
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.height = '250px'
      }else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'jovemmulher.png')
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.height = '250px'
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'mulheradulta.png')
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.height = '250px'
      } else {
        //Idoso
        img.setAttribute('src', 'idosomulher.png')
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.height = '250px'
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}