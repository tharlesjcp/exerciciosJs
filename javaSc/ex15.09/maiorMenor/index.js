/*
1 - Faça um programa que recebe três números do usuário,
e identifica o maior através de uma função e o menor número através de outra função. */
function maior(){
 n1 = parseFloat(prompt("Digite o primeiro número papai"))
 n2 = parseFloat(prompt("Digita o segundo agora :)"))
 n3 = parseFloat(prompt("E pra completar digita o terceiro"))
 if (n1 > n2 && n1 > n3){
    alert("o maior número é o primeiro digitado: " + n1)
 }else if (n2 > n1 && n2 > n3){
    alert("O maior número é segundo digitado: " + n2)
 }else alert("O maior número é o terceiro digitado: " + n3)
 return
}
maior()
function menor(){
    n1 = parseFloat(prompt("Digite o primeiro número: "))
    n2 = parseFloat(prompt("Digita o segundo agora :)"))
    n3 = parseFloat(prompt("E pra completar digita o terceiro: "))
    if (n1 < n2 && n1 < n3){
       alert("o menor número é o primeiro digitado: " + n1)
    }else if (n2 < n1 && n2 < n3){
       alert("O menor número é segundo digitado: " + n2)
    }else alert("O menor número é o terceiro digitado: " + n3)
    return
   }
   menor()