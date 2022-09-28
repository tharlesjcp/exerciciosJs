/**6) Elabore um sistema que dada a idade de um nadador classifique-o em uma das seguintes
categorias:
Infantil A = 5 a 7 anos
Infantil B = 8 a 11 anos
Juvenil A = 12 a 13 anos
Juvenil B = 14 a 17 anos
Adultos = Maiores de 18 anos */

let idade=0;
idade = prompt("Qual a idade da pessoa?")
if(idade >= 5 && idade <= 7){
    alert(`Categoria Infantil A (de 5 a 7 anos) \nIdade inserida ${idade}`)
} else if(idade >= 8 && idade <= 11){
    alert(`Categoria Infantil B (de 8 a 11 anos)\nIdade inserida ${idade} `)
}else if (idade >= 12 && idade <= 13){
    alert(`categoria Juvenil A (de 12 a 13 anos) \nIdade inserida ${idade}`)
}else if (idade >= 14 && idade <= 17){
    alert(`categoria Juvenil B (de 14 a 17 anos) \nIdade inserida ${idade}`)
}else if (idade >= 18){
    alert(`categoria Adultos (maiores que 18 anos) \nIdade inserida ${idade}`)
}else{
    alert("Escolha uma idade a partir de 5 anos!")
}