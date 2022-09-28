//1 - Faça um Algoritmo que receba o preço de custo de um produto e mostre o valor da venda.
//sabe-se que o preço de custo receberá um acréscimo
//de acordo com um percentual informado pelo usuário 
let percentual, custoMe, custoFin, merc; //declaração das variáveis
custoMe= prompt("Qual o custo inicial da mercadoria?");
percentual= prompt("Qual será o percentual de lucro?");
custoFin= parseInt(custoMe) * parseInt(percentual) /100
merc = parseInt(custoFin) + parseInt(custoMe)
alert("O valor final é: " + parseInt(merc))