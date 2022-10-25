// ESTRUCTURA DECISIÓN: 
// EJEMPLOS: 

// ESTRUCTURA DE DECISIÓN SIMPLE: 
// EJERCICIOS 1 :

// int main()
// {
// char miPrimeraLogica, miSegundaLogica;
// miPrimeraLogica = TRUE;
// miSegundaLogica = !miPrimeraLogica;
// if ( miSegundaLogica == TRUE)
// printf("miSegundaLogica tiene el valor cierto (true)");
// if ( miSegundaLogica != TRUE)
// printf("miSegundaLogica tiene el valor falso (false)");
// return 0;
// }

// EJERCICIO 2 : 

// Algoritmo
// 0. Inicio
// 1. Escribir (“Introduzca tres números enteros”)
// 2. Leer (A, B, C)
// 3. Si (A + B = C) entonces
// Escribir (“Iguales”)
// Fin_si
// 4. Si (A + C = B) entonces
// Escribir (“Iguales”)
// Fin_si
// 5. Si (B + C = A) entonces
// Escribir (“Iguales”)
// Fin_si
// 6. Si ((A + B = C) o (A + C = B) o (B + C = A)) entonces
// Escribir (“Distintos”)
// Fin_si
// 7. Fin

// EJERCICIO 3 : 

// Public static void main ()
// {
// int A, B, C;
// println(“Introduzca tres números enteros\n”);
// leer A,B,C);
// if (A + B == C)
// { println(“Iguales”);
// exit(0); }
// if (A + C == B)
// { println(“Iguales”);
// exit(0); }
// if (B + C == A)
// { println(“Iguales”);
// exit(0); }
// if ((A + B != C) && (A + C != B) && (B + C != A))
// println(“Distintos”);
// return 0;
// }
//___________________________________________________________________________________________-

// ESTRUCTURA DE DECISIÓN DOBLE : 

// EJERCICIO 1 :

// // int main()
// {
//     int miEntero;
//     println(“Introduzca un numero entero”);
//     lea miEntero;
//     if ( miEntero == 0 )
//         println("miEntero es igual a cero”);
//     else
//         printf("miEntero no es igual a cero”);
//     println(“fin del programa\n”);
//     return 0;
//     }

// EJERCICIO 2 : 

// // public static void main()
// {
//     int m;
//     printf(“Introduzca un numero entero\n”);
//     lea(m);
//     if ( (m >= 1) && (m <= 10) )
//     println(“ esta entre 1 y 10" + m);
//     else
//     println( m + “ no esta entre 1 y 10");
//     }

// EJERCICIO 3:
 // Algoritmo
// 0. Inicio
// 1. Escribir (“Introduzca el numero de horas trabajadas”)
// 2. Leer (HST)
// 3. Escribir (“Introduzca el precio por hora”)
// 4. Leer (PH)
// 5. Si (HST < 40) entonces
// SM = HST * PH
// sino
// SM = 40 * PH + PH* 2 *(HST-40)
// Fin_Si
// 6. Escribir (“Salario mensual”, SM)
// 7. Fin
// _____________________________________________________________________________________________

// ESTRUCTURA DE DECISIÓN ANIDADA: 
// EJERCICIOS: 

// // void main ()
// {
//     int = a1;
//     println(“Introduzca un valor entero\n”);
//     lea a1;
//     if ( a1 >= 0 )
//     if ( a1 <= 10 )
//     printf(“el numero esta entre 0 y 10\n”);
//     else
//     printf(“el numero no esta entre 0 y 10\n”);
//     }
// EJERCICIO 2 : 
// public static void main ()
// {
// int = a1;
// println(“Introduzca un valor entero\n”);
// lea a1;
// if ( a1 >= 0 )
// {
// if ( a1 <= 10 )
// println(“el numero esta entre 0 y 10\n”);
// a1++;
// }
// else
// println (" el numero es negativo ");
// }
 a= 40
 b= 4
 if(b==0){
     console.log("error")
 }   else{
     console.log(a/b)
 }
