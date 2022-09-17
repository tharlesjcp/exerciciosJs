/**1- Faça um programa que mostre uma contagem na tela de 233 a 456, só que
contando de 3 em 3 quando estiver entre 300 e 400 e de 5 em 5 quando não estiver. */

let cont = 233;

     do{
         if(cont >= 300 && cont <= 400){
             cont += 3;
         }else{
             cont += 5;
         }
         alert(cont);

     }while(cont <= 456);
