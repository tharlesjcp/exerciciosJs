/**2- Faça um programa que pegue um número do teclado e calcule a soma de todos os
números de 1 até ele. Ex.: o usuário entra 7, o programa vai mostrar 28, pois
1+2+3+4+5+6+7=28. */

 let num = 0, resultado = 0;

 num = prompt("Digite um numero: ");

 do{
     resultado = parseInt(resultado) + parseInt(num);
     num--

 }while(num >= 0 );