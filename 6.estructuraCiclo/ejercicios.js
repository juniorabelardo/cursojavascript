// EJERCICIOS DE FOR : 
// EJERCICIO 1: 
// SUMAR TODOS LOS ENTEROS PARES DESDE 2 HASTA EL 100.

// int main (int argc, char** argv) {

    // Forma a
    // Int par = 0;
    // for( int i = 2; i<= 100; i++)
    {
        // if(i % 2 == 0)
            // par +=i;
    }
    // cout<<end1;
    // cout<<"la suma de todos los pares" << par<<end1;


    // system ("pause"); return 0;

    //--------------------------------------------------------
    // EJERCICIO ESTRUCTURA CICLO (while)

    // int main()
// {
//     cout << "Dame el mes: (1, 2, ..., 12): ";
//     int mes;
//     cin >> mes;
//     while (mes < 1 || mes > 12)
//     {
//        cout << "El valor introducido no es válido.\n";
//        cout << "Dame el mes: (1, 2, ..., 12): ";
//        cin >> mes;
//     }
//     if (mes == 1 || mes == 3 || mes == 5 || mes == 7 ||
//         mes == 8 || mes == 10 || mes == 12)
//        cout << "El mes tiene 31 dias.\n";
//     else if (mes == 2)
//        cout << "El mes tiene 28 o 29 dias.\n";
//     else if (mes == 4 || mes == 6 || mes == 9 || mes == 11)
//        cout << "El mes tiene 30 dias.\n";
//     else
//        cout << "¡Imposible!\n";
//  }
// -------------------------------------------------
// EJERCICIOS DO-WHILE: 

//  Ejejrcicio 1
// Determinar en un conjunto de n números naturales:
// ¿ Cuántos son menores que 15 ?
// ¿ Cuántos son mayores que 50 ?
// ¿ Cuántos están en el rango entre 25 y 45 ?

// Análisis
// La dificultad parece aumentar, no se asusten, solo nos piden más salidas que entradas, para ello reconocer cúales son: 

// Entradas
// a.- Cantidad de números a ingresar, será n
// b.- El número a ingresar, llamaremos num.

// Salidas
// a.- Números menores a 15, un contador, lo denominaremos c15.
// b.- Números mayores a 50, contador que se será c50.
// c.- Números entre 25 y 45,  un contador se llamará c_rango.

// Procesos o condiciones
// a.- num < 15
// b.- num  > 50; 
// c.- num > 25 y num < 45;

// Listo empezemos, pero nunca olvide el primer contador que es el general, que nos controlará las iteraciones del programa, será c.

// int main ( int argc, char** argv) {

// Variables
// int n, num;
// Contadores
// int c = 0, c15 = 0, c50 = 0, c_rango = 0; 
// cout<<"Ingresar cantidad de numeros: "; 
// cin>> n;
// cout<<end1;
// do
// {
//     cout<<c+1<<".- ingresar numero: ";
//     cin>>Num;
//     if(num < 15)
//     c15++;
//     if( num > 50)
//     c50 ++;
//     if (num > =25 && num <=45)
//     c_rango++;
//     //CONTADOR GENERAL
//     c++;
// } while (c < n);
// cout<<end1;
// cout<<"Menores a 15: " <<c15<<end1;
// cout<<"Mayores a 50: " <<c50<<end1;
// cout<< "Entre 25 y 45: " <<c_rango<<end1<<end1;
// system ("pause"); return 0;
// }

