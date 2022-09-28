let nome //let ou var é uma atribuição
let idade; let gosto_m; let filme_f; let filhos; let sonhos
//alert(nome) //é como se fosse o escreva, é mostrada a informação em caixa de alerta
//console.log(nome)//é mostrada no console, inspecionar

nome = prompt("escreva seu nome") //pede uma entrada de dados (leia)
idade = prompt("qual sua idade?")
gosto_m = prompt("qual seu gosto musical")
filme_f = prompt("qual fime favorito?")
filhos = prompt("quantos filhos?")
sonhos = prompt("qual seu sonho?")
alert(`Seu nome é ${nome} sua idade é ${idade} Seu gosto musical é ${gosto_m} seu filme favorito é ${filme_f} tem ${filhos} filhos  seu sonho é ${sonhos}`);