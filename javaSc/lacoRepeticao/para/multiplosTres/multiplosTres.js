/**
 * 2- Desenvolver um sistema que efetue a soma de todos os números ímpares que são
múltiplos de três e que se encontram no conjunto dos números de 1 até 500.
 */
let i, soma;
for(i = 1; i <= 500; i = i + 2){
    if (i % 3 == 0 && i % 2 != 0) {
        soma = i++
        alert("\n"+ soma)
    }
}