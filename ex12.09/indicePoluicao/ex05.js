/*5) A Secretaria de Meio Ambiente que controla o índice de poluição mantém 3 grupos de
indústrias que são altamente poluentes do meio ambiente. O índice de poluição aceitável
varia de 0,05 até 0,25. Se o índice sobe para 0,3 as indústrias do 1º grupo são intimadas a
suspenderem suas atividades, se o índice crescer para 0,4 as industrias do 1º e 2º grupo são
intimadas a suspenderem suas atividades, se o índice atingir 0,5 todos os grupos devem ser
notificados a paralisarem suas atividades. Faça um sistema que leia o índice de poluição
medido e emita a notificação adequada aos diferentes grupos de empresas.
*/
let g
g = prompt("Qual o nível de poluição atual? ")
if(g==0.3){
    alert("Indústrias do 1º grupo deverão suspender atividades!")
}else if (g==0.4){
    alert("Industrias do 1º e 2º deverão suspender atividades!")
}
else if(g>=0.5){
    alert("Todos os grupos devem suspender atividades!!")
}else{
    alert("O índice de poluição é aceitável!")
}