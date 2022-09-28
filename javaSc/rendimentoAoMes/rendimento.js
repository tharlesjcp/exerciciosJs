//faça um algoritmo que receba um valor que foi depositado e exiba o valor com rendimento após um mês.
//considere fixo o juro da poupança em 0,70% a.m
let v1, rendiF, cal;
v1 = prompt("Qual o valor do depósito?");
cal = parseFloat(v1) + 1.007
alert(`o valor é: ${cal}`);
