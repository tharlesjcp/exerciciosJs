/* 2 - Criar uma função que converta uma temperatura 
de Celsius para Fahrenheit
 */
function conv() {
f=prompt("Qual entrada em celcius?")
conv = f * 1.8 + 32;
return alert("A conversão para Fahrenheit é " + conv);
}
conv()