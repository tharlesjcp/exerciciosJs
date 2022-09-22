/**ATIVIDADE 3
Crie uma classe paciente e apresente os atributos e métodos referentes a esta classe, 
em seguida crie um objeto paciente, defina as instâncias deste objeto e 
apresente as informações deste objeto no console.
 */
export class Paciente{
    nome: string
    estadoCliente: string
    dataEntrada: string

    constructor(
        nome: string,
        estadoCliente: string,
        dataEntrada: string,
    ){
        this.nome = nome
        this.estadoCliente = estadoCliente
        this.dataEntrada = dataEntrada
    }
    VerPaciente(){
        console.log(`Nome: ${this.nome} \nEstado atual: ${this.estadoCliente} \nData da entrada: ${this.dataEntrada}`)
    }
}