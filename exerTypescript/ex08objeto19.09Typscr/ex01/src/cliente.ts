export class Client {
    nome: string;
    endereco: string;
    aniversario: string;
    ultimaCompra: string;

    constructor(
    nome: string,
    endereco: string,
    aniversario: string,
    ultimaCompra: string,
    ){
        this.nome = nome
        this.endereco = endereco
        this.aniversario = aniversario
        this.ultimaCompra = ultimaCompra
    }
verNome () {
    console.log (`Nome: ${this.nome} \nEndereço: ${this.endereco} \nAniversário em ${this.aniversario} \nA última compra foi em ${this.ultimaCompra}`)
}

}