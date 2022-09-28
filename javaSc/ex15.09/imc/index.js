/*
4 - Crie uma um programa de saúde, nesse programa desenvolva uma função que 
calcula o imc de pacientes, a função deverá receber os  seguintes parâmetros, peso e altura.
*/
function imc(peso, altura){
//    peso = prompt("Qual o peso?")
//    altura = prompt("Qual a altura?")
    imc = peso / (altura * altura)
    return  alert("O seu imc é " + imc)
}
imc(80, 1.50);