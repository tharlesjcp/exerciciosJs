/**ATIVIDADE 3
Crie uma classe produto eletrônico e apresente os atributos e métodos referentes a esta classe,
em seguida crie um objeto produto eletrônico, defina as instâncias deste objeto e apresente
as informações deste objeto no console.
 */

export class Eletric{
    eletronico: string;
    marca: string;
    preco: number;

    constructor(
    eletronico: string,
    marca: string,
    preco: number,
    ){
        this.eletronico = eletronico
        this.marca = marca
        this.preco = preco
    }
    tipoEletronico() {
            console.log(`O eletrônico é o  ${this.eletronico} \nA marca é ${this.marca} \nO preço é R$ ${this.preco}`)
    }
}