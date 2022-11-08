// function contarVocales(texto){retur cantidadVocales}

  function contarVocales(palabra){
      let contador=0
      for (let i=0 ; i<palabra.length;i++){
               switch(palabra[i]){
                   case 'a': case 'e': case 'i' : case 'o' : case 'u':
                   contador+=1
               }
      }
      let contarVocales='este son los numeros de vocales ' +contador
          return contarVocales
  }
  console.log(contarVocales('eucalipto'))



// function calculadora(num1,num2,operacion){retur total}

calculadora(45,12,'resta')//33