/*ATIVIDADE 4
Crie uma classe funcionário e apresente os atributos e métodos referentes esta classe,
em seguida crie um objeto funcionário, defina as instâncias deste objeto e apresente as informações
deste objeto no console.
* */
export class Funcionário{
    nome: string;
    funcao: string;
    salario: number;
    constructor(
        nome: string,
        funcao: string,
        salario: number,
    ){
    this.nome = nome
    this.funcao = funcao
    this.salario = salario
    }
    verSalario (){
        console.log(`Funcionário: ${this.nome} \nFunção: ${this.funcao} \nSalário R$ ${this.salario}`)
    }
}