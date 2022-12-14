//ESTRUCTURA DECISIÓN : 
// CONCEPTO: Una estructura de decisión permite que la ejecución de un algoritmo tome distintos caminos, que llevan a distintos resultados, dependiendo de la condición o condiciones presentes en la estructura de decisión.
//Una condición corresponde a una expresión lógica que puede contener
//operadores relacionales (<, >, <=, >=, =) o conectores lógicos:

// “Y” ( , &)
// “NO” (~)
//  “O” ( v, ǀ)

// Las estructuras de decision se dividen en :

// Simples
// Dobles
// Anidadas

// 1.1 ESTRUCTURA DE DECISIÓN SIMPLE : 
// Esta estructura evalúa la condicion, luego: 

//Si la condición es cierta entonces ejecuta el
//conjunto de sentencias definidas por Si
// , i =
// 1 .. n.

//Si la condición es falsa entonces no ejecuta
// el conjunto de sentencias definidas por Si
// , i =
// 1 .. n.

// / EJEMPLOS: 
// PSEUDOCÓDIGO EN ESPAÑOL : 

// Si (x> 0.0) entonces 
   // Escribir (“x es
                 // positivo”)
 // Fin_si
 // Si (a<b) entonces
 // b = b + a
 // Fin_si

 // CÓDIGO EN N.
 // If (x>0.0)
    // printf(“x es positivo
 // \n”);
 // If (a<b)
 // {b+=a;}

// NOTA:
// Observe que cuando hay una
// sola instrucción a
// ejecutarse dentro del if,
// las llaves son opcionales
// ___________________________________________________________________________________
// 1.2 ESTRUCTURA DE DECISIÓN DOBLE: 
// Permite elegir entre dos opciones o alternativas posibles,
// en función del cumplimiento o no de la condición:

// Si el resultado de evaluar la condición el CIERTO se 
 //ejecutará un determinado grupo de instrucciones 1i,
// para i = 1, .., n.
 // Si el resultado de evaluar la condición es FALSO se
 // ejecutará otro grupo de instrucciones 2k, para
// k = 1, .., m.
 
// PSEUDOCÓDIGO EN ESPAÑOL : 

// // Si (nota <= 9) entonces
// Si (nota >= 7) entonces
// nota = nota * 1.2;
// sino
// nota = nota / 1.2;
// Fin_Si
// sino
// Si (nota <= 15)
// nota = nota * 1.12;
// Fin_Si
// Fin_Si

// CODIGO EN NET BEANS:

// // if (nota <= 9)
// {
//     if (nota >=7)
//     nota = nota * 1.2;
//     else
//     nota = nota / 1.2;
//     } else {
//     if (nota <= 15)
//     nota *= 1.12;
//     }
// _____________________________________________________________________________________
 
//ESTRUCTURA DE DECISIÓN ANIDADA: 
// Concepto: Estructura de decisión anidada (condicionales anidados).

//Permiten comparar una variable contra distintos posibles resultados, ejecutando para cada caso una serie de instrucciones especificas.

// Si <condición1> entonces
//  acciones a realizar si
//  condición1 es verdadera
// Sino
//  Si <condición2> entonces
//  acciones a realizar si
//  condición2 es verdadera
//  Sino
//  Si <condición3> entonces
//  acciones a realizar si
//  condición3 es verdadera
//  Fin si
//  Fin si
// Fin si 

// PSEUDOCÓDIGO EN ESPAÑOL 
// Si (letra > ‘f’) entonces
// Si (letra < ‘j’) entonces
// Escribir (“Esta entre g e
// i”)
// Fin_Si
// Si (letra < ‘m’) entonces
// Escribir (“Esta entre j y
// n”)
// Fin_Si
// Fin_Si

// CODIGO EN NET BEANS: 
// // char letra;
// …
// if (letra > ‘f’)
// { if (letra < ‘j’)
// println(“Esta entre f e
// i”);
// if (letra < ‘m’)
// println(“Esta entre j y
// n”);
// }
 
// // tarea:
//hacer un programa que apartir de una variable edad determine si es mayor o menor.

var edad=15
if(edad>=18){
    console.log("eres mayor de edad")
}
else{ console.log("es menor de edad") 
}


//hacer un programa que almacene en una variable un password y evalue si el paswowrd es corecto, imprime un mensaje de bienvenida si es
//igual, y en mensaje error si no lo es.

let contraseña='MAYCOL'
let password='MAYCOl'

if(contraseña==password){
    console.log('bienvenido')
}else{
    console.log('error')
}
//hacer un programa que almacene dos dividendo y divisor numeros si su divisor es cero se debera mostrar un mensaje de error caso contrario
//imprimira el resultado de la división.

let dividendo = 20
let divisor = 0
if(divisor == 0){
    console.log('error')
}else{
    console.log(dividendo/divisor)
}


numeroMes=7
switch(numeroMes){
    case 1:
     console.log('enero')
     break
    case 2:
     console.log('febrero')
     break
    case 3:
     console.log('marzo')
     break
    default:
     console.log('error mes no encontrado')
}



numeroMes='2'
switch(numeroMes){
    case 'a':
     console.log('es una vocal')
     break
    default:
 console.log('no es una vocal')
}

// la estructura de desicion 
// seguira un camino distinto
// segun la condicion


vocal='vocal'
switch(vocal){
    case 'a': case 'e': case 'i': case 'o': case 'u':
     console.log('la letra ${vocal}, es una vocal')
     break
    default:
     console.log('no es una vocal')
}




vocal='vocal'
switch(vocal){
    case 'a': case 'e': case 'i': case 'o': case 'u':
     console.log("la letra" ,vocal, "es una vocal")

     break
    default:
     console.log('no es una vocal')
   }
