/*5) A Secretaria de Meio Ambiente que controla o índice de poluição mantém 3 grupos de
indústrias que são altamente poluentes do meio ambiente. O índice de poluição aceitável
varia de 0,05 até 0,25. Se o índice sobe para 0,3 as indústrias do 1º grupo são intimadas a
suspenderem suas atividades, se o índice crescer para 0,4 as industrias do 1º e 2º grupo são
intimadas a suspenderem suas atividades, se o índice atingir 0,5 todos os grupos devem ser
notificados a paralisarem suas atividades. Faça um sistema que leia o índice de poluição
medido e emita a notificação adequada aos diferentes grupos de empresas.*/
let indice=0.0;
indice = prompt("Qual o índice de poluição?")
if(indice >= 0.05 && indice <= 0.25){
    alert("O indice de poluição é aceitável")
}else if(indice == 0.3){
    alert("indústrias do 1º grupo são intimadas asuspenderem suas atividades")
}else if(indice == 0.4){
    alert("industrias do 1º e 2º grupo são intimadas a suspenderem suas atividades")
}else if (indice == 0.5){
    alert("todos os grupos devem ser notificados a paralisarem suas atividades")
}else{
    alert("O índice de poluição aceitável varia de 0,05 até 0,25.")
}