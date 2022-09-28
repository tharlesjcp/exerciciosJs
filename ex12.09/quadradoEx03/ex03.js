/*3) Desenvolva um sistema em que:
Leia 4 (quatro) números;
Calcule o quadrado de cada um;
Se o valor resultante do quadrado do terceiro for &gt>= 1000, imprima-o e finalize;
Caso contrário, imprima os valores lidos e seus respectivos quadrados.
*/
let n1, n2, n3, n4, q1, q2, q3, q4;
n1 = prompt("Digite o primeiro número");
n2 = prompt("Digite o segundo número");
n3 = prompt("Digite o terceiro número");
n4 = prompt("Digite o quarto número");
q1 = parseFloat(n1) * n1;
q2 = parseFloat(n2) * n2;
q3 = parseFloat(n3) * n3;
q4 = parseFloat(n4) * n4;
if (n3 >= 1000){
    alert("O valor do terceiro número é: " + n3)
} else {alert("O primeiro número é " + n1 + "  seu quadrado é " + q1 + "\nO segundo número é " + n2 + " O seu quadrado é " + q2 + "\nO terceiro número é " + n3 + " O seu quadrado é " + q3 + "\nO quarto número é " + n4+ " O seu quadrado é " + q4)
}