/**ATIVIDADE 1
Crie uma classe patinete e apresente os atributos e métodos referentes a esta classe,
em seguida crie um objeto patinete, defina as instâncias deste objeto e apresente as informações
deste objeto no console.
 */
export class Patinete{
    marca: string
    preco: number

    constructor(
        marca: string,
        preco: number,
    ) {
        this.marca = marca
        this.preco = preco
    }

    verAtributos(){
        console.log(`Marca: ${this.marca} \nPreço: ${this.preco}`)
    }
}