/*1- A prefeitura de uma cidade fez uma pesquisa entre 20 de seus habitantes,
coletando dados sobre o salário e número de filhos. A prefeitura deseja saber:  
a) média do salário da população;
b) média do número de filhos;
c) maior salário;
d) percentual de pessoas com salário até R$100,00.
 */
//for (let test = 0; test < 10; test++){
//    alert("A contagem atual é: " + test);
//}
 let filhos, sal100 = 0, salario, soma = 0, mediaSal = 0.0, mediaF = 0, mSal = 0.0, perc
 for(i = 0; i <= 3; i++){
 salario = prompt("Digite seu salário");
 filhos = prompt("Digite o numero de filhos");

 soma = parseFloat(soma) + parseFloat(salario);
 mediaF = parseInt(mediaF) + parseInt(filhos);

 if(mSal < salario){
 mSal = parseFloat(salario);
 }

if(salario <= 100 ){
parseFloat(sal100++);
 }
 }
  mediaSal = soma / 4;
 mediaF = parseInt(mediaF) / 4;
 perc = parseFloat(sal100) / 4 * 100;

 alert("A mídia do salário da população: " + mediaSal.toFixed(2) + "\nMedia de filhos da população é: " + mediaF + "\nO maior salário foi: " + mSal + "\nO Percentual de pessoa com salario até 100 é: " + perc + "%");
