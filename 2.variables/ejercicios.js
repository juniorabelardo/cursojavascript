//averiguar las diferencias entre let y var
// la cocina del codigo//
// DIFERENCIAS ENTRE LET Y VAR//
/*VAR : La cual define una variable
global o local en una función sin importar el ámbito del bloque.*/

var tipo= ('hola')
console.log(tipo)

//*LET: Te permite declarar variables limitando su alcance
// al bloque, declaración o expresión donde se está usando.*/

let tipo2=(9)
console.log(tipo2)

//hosting, scope
//contexto global y local
// HOSTING, SCOPE//
//SCOPE:El scope define el alcance o la visibilidad de las variables en algún punto
// de la ejecución del código.
// En los navegadores existe un scope global, que es el objeto window; en 
// Node.js es el objeto global.*/
// HOSTING: El Hoisting es el comportamiento por defecto de Javascript en el que la declaración de variables
// y funciones se mueve automáticamente al principio del scope (ya sea el principio del archivo, la funcion o el bloque).
//Veamos un ejemplo: 
//hello*/
function hello()¨{
    console.log("Hola")
}

//CONTEXTO GLOBAL Y LOCAL//
//CONTEXTO GLOBAL: Una variable global es aquella que està disponible a lo largo del scrpit actual
// es decir dentro del código JavaScript que se está escribiendo.*/
//CONTEXTO LOCAL: Las variables locales sólo resultan visibles y disponibles dentro de la función
//en la que están definidas.*/
