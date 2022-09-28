/**8) Construa um sistema para ler uma variável numérica N e imprimi-la somente se a mesma
for maior que 100, caso contrário imprimi-la com o valor zero. */
let N=0;
N = prompt("Qual é a variável?")
if(N >= 100){
    alert(`A variável digitada é maior ou igual à 100! \nVocê digitou ${N}`)
}else{
    N=0
    alert(`A variável digitada é menor que 100!\nVariável zerada ${N}`)
}