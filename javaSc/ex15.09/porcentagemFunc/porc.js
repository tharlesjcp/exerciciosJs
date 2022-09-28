/*1 - Criar uma função para calcular a 
porcentagem de um número */
let p, v;
function porc () {
    p=prompt("Qual a porcentagem?")
    v=prompt("Qual valor para a porcentagem?")
    porc = p * v / 100;
    return alert("o resultado é " + porc);
}
porc()