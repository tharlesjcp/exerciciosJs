/*4) Faça um sistema que leia um número inteiro e mostre uma mensagem indicando se este
número é par ou ímpar, e se é positivo ou negativo.
*/
let num=0, impar=0, pos;
num = prompt("Insira um número: ");
impar = num % 2
if(impar == 0){
    alert("É par!")
} else{
    alert("É impar!")
}if(num < 0){
    alert("É negativo!")
} else{
    alert("É positivo!")
}