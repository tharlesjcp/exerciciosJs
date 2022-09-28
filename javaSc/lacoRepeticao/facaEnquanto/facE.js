/**1- Faça um programa que mostre uma contagem na tela de 233 a 456, só que
contando de 3 em 3 quando estiver entre 300 e 400 e de 5 em 5 quando não estiver.
 */
let x = 233
do{
    alert(x)
    x += 5

}while (x < 300)
do{
    alert(x)
    x += 3

}while (x < 400)
do{
    alert(x)
    x += 5

}while (x < 456)