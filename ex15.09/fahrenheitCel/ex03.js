/*
3 -  Criar uma função que converta uma 
temperatura de Fahrenheit para Celsius
 */
function fah(){
    c=prompt("Qual valor em fahrenheit?")
    fah = c - 32 / 1.8;
    return alert("A conversão para Celcius ficará: " + fah);
}
fah()