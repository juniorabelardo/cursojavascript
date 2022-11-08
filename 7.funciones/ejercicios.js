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



// function calculadora(num1,num2,operacion){return total}
function calcular (num1,num2,operacion){
    if(operacion=="suma"){
        total=num1+num2
    }
    if(operacion=="resta"){
        total=num1-num2
    }
    if(operacion=="multiplicacion"){
        total=num1*num2
    }
    if(operacion=="division"){
        total=num1/num2
    }
    return total
    }

console.log(calcular(45,12,"resta"))