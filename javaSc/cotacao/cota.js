//Faça um algoritmo que efetua a apresentação do valor da conversão em real (R$)
//de um valor lido em dólar (US$). o algoritmo deverá solicitar o valor da cotação do dólar.
let dolar, cambio;
dolar= prompt("DIgite o valor Dolar :  ")
cambio = 5.21 * parseInt(dolar)
alert(`o valor em Real é \"R$\"  ${cambio}`)