// pasos para construir una function
// 1. palabra reservada function
// 2. ponerle un nombre que describa el trabajo
  // que realizara la funcion
//3. la funcion puede recibir parámetros
 // pero si o si indicar que tendra parámetros
 //()
 //(listaAmigos)
 //(edad, nombre)
 //4. DATO IMPORTANTE. una funcion siempre tiene que 
 // retornar un tipo de dato
 function saludo(nombre,apellido){
     let saludo='hola como estas '+ nombre+' '+apellido
     return saludo
 }
 // para usar una funcion debo llamar a la funcion
 console.log(saludo('junior', 'quispe'))

 // SIGINIFICADO Y FUNCIONES DE DOM
 // ¿Qué es el DOM? 

// Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM (o simplemente DOM).

// En Javascript, cuando nos referimos al DOM nos referimos a esta estructura, que podemos modificar de forma dinámica desde Javascript, añadiendo nuevas etiquetas, modificando o eliminando otras, cambiando sus atributos HTML, añadiendo clases, cambiando el contenido de texto, etc...

// Al estar "amparado" por un lenguaje de programación, todas estas tareas se pueden automatizar, incluso indicando que se realicen cuando el usuario haga acciones determinadas, como por ejemplo: pulsar un botón, mover el ratón, hacer click en una parte del documento, escribir un texto, etc...

// A continuacion veremos que JAVASCRIPT nos proporciona un conjunto de herramientas para trabajar de forma nativa con el DOM de la página,

// CAPITULO DEL DOM   /  