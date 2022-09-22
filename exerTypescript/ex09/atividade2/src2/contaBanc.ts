/**ATIVIDADE 2
Crie uma classe conta bancária e apresente os atributos e métodos referentes a esta classe, 
em seguida crie um objeto conta bancária, defina as instâncias deste objeto 
e apresente as informações deste objeto no console.
 */
export class Banc{
    nomeTit: string
    agencia: string
    conta: string

    constructor(
        nomeTit: string,
        agencia: string,
        conta: string,
    ){
        this.nomeTit = nomeTit
        this.agencia = agencia
        this.conta = conta
    }
    verDados(){
        console.log(`Nome: ${this.nomeTit}  \nConta: ${this.conta} \nAgência: ${this.agencia}`)
    }
}