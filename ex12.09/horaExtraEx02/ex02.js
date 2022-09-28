/*2) Elabore um sistema que leia as variáveis C e N, respectivamente código e número de
horas trabalhadas de um operário. E calcule o salário sabendo-se que ele ganha R$ 10,00
por hora. Quando o número de horas exceder a 50 calcule o excesso de pagamento
armazenando-o na variável E, caso contrário zerar tal variável. A hora excedente de
trabalho vale R$ 20,00. No final do processamento imprimir o salário total e o salário
excedente.*/
let C, N, S, E;
C = prompt("Qual o códgo do operário")
N = prompt("digite a quantidade de horas trabalhadas: ");
E = N-50;
C = E*20;
S = N*10
if(N < 50){
    alert("Não houve hora extra, \n O Salário é :" + S)
} else{
    alert("salário excedente é: " + C +"\nsalário total: " + (C + S));
}