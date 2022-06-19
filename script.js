function verificar() {
  var data = new Date()
  var ano = data.getFullYear()   //FullYear pega os 4 digitos 
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')

  if (fano.value.length == 0 || Number (fano.value) > ano) {
     window.alert('[ERRO] Verifique os dados e tente novamente')    

 }else {

    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
 
    if (fsex[0].checked) {
        gênero = 'Homem'
       
        if (idade >= 0 && idade < 10) {
            //bebe
          img.setAttribute('src', 'menino.png')  
       
        }else if ( idade <= 30) {
            //Jovem
          img.setAttribute('src', 'rapaz.png')  
       
        }else if ( idade <= 50) {

             // Adulto
          img.setAttribute('src', 'homem.png')   
            
        
        }else  { 
            //Idoso
         img.setAttribute('src', 'senhor.png')   
       
         
        
        }       //MULHER
               
        } else if   (fsex[1].checked) {
         gênero = 'Mulher'

         if (idade >= 0 && idade < 10) {
            //bebe
          img.setAttribute('src', 'menina.png')  
       
        }else if ( idade <= 30) {
            //jovem
            img.setAttribute('src', 'moça.png')  
        }else if ( idade <= 50) {

            // Adulto
         img.setAttribute('src','mulher.png')   
       
            
        }else { 
              //Idoso
            img.setAttribute('src', 'senhora.png') 
        }
           
    }
       

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)

} 

}
