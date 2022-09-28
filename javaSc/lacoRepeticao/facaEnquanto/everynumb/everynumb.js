/**2- Faça um programa que pegue um número do teclado e calcule a soma de todos os
números de 1 até ele. Ex.: o usuário entra 7, o programa vai mostrar 28, pois
1+2+3+4+5+6+7=28. */let a, x=1, v=0
a = prompt("digite um numero: ")
do{
    alert(x)
    v = v + x
    x++

}while(x<=a)
alert(v)