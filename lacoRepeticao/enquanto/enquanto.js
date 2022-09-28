/**
 * 1- Elaborar um programa que efetue a leitura sucessiva de valores numéricos e
apresente no final o total do somatório, a média e o total de valores lidos. O programa
deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores
positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor
negativo.*/

let x, y, z, soma, media
x = prompt("digite um numero")
y = prompt("digite um numero")
z = prompt("digite um numero")
while (x >= 0 && y >= 0 && z >= 0) {
    soma = (+x) + (+y) + (+z)
    media = ((+x) + (+y) + (+z)) / 3
    alert(`soma: ${soma}\nmedia: ${media}`)
    break
}