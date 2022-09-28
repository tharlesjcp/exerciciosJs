/**1- A prefeitura de uma cidade fez uma pesquisa entre 20 de seus habitantes,
coletando dados sobre o salário e número de filhos. A prefeitura deseja saber:  
a) média do salário da população;
b) média do número de filhos;
c) maior salário;
d) percentual de pessoas com salário até R$100,00. */
let filhos, sal100=0, salario, soma=0, mediasal=0.0, mediaF=0, msal=0.0, perc;

for(i=0;i<=5;i++){
    salario=prompt("Digite seu salário: ");
    filhos = prompt("Digite o numero de filhos: ");
    
    soma = parseFloat(soma) + parseFloat(salario);
    mediaF= parseInt(mediaF) + parseInt(filhos);

    if(msal < salario){
        msal= parseFloat(salario);
    }
    if(salario <= 100){
        parseFloat(sal100++);
    }
}
mediasal = soma / 20;
mediaF = parseInt(mediaF)/20;

perc = (parseFloat(sal100) / 20) * 100;
alert(`A media do salário da população: ${mediasal.toFixed(2)}\nMedia de filhos da população é: ${mediaF.toFixed(2)}\nMaior salário é de: ${msal.toFixed(2)}\nMedia de salário menor que 100 Reais é de: ${perc.toFixed(2)}`)