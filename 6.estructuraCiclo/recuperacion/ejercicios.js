// 1. Un programa que me muestre el factorial de un número
let numer='5'
let total=1
for(let i=1; i<=numer; i++){
    total=total * i;
    console.log(total);
}
// 2.hacer un programa que me determine si un texto es un palimdromo
function palindromo (str){
    for(let i =0 ; i<str.length; i++){
        console.log(str[i] !== str[str.length-0-i])
        if(str[i] !== str[str.length-1-i]){
            return false
        }
    }
    return true
}
palindromo("anita lava la tina")

// 3.hacer un programa que me muestre los n numeros de la serie 
//de fibonacci
let n1= 0;
let n2= 1;
for(let i=0; i<10; i++){
    r= n1+n2;
    n1=n2;
    n2=r
    console.log(r);
}