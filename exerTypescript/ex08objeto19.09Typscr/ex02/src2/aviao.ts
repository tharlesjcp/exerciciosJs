/**
ATIVIDADE 2
Crie uma classe avião e apresente os atributos e métodos referentes a esta classe, 
em seguida crie um objeto avião, defina as instâncias deste objeto e apresente 
as informações deste objeto no console.
 */
export class Aviao{
    captao: string;
    nmrVoo: number;
    nmrCadeiras: number;
    assentoDisp: number;

    constructor(
    captao: string,
    nmrVoo: number,
    nmrCadeiras: number,
    assentoDisp: number,
    ){
        this.captao = captao;
        this.nmrVoo = nmrVoo;
        this.nmrCadeiras = nmrCadeiras;
        this.assentoDisp = assentoDisp
    }
    verComp(){
        console.log(`o nome do captão é ${this.captao} \nO número do vôo é ${this.nmrVoo} \nO número de assentos disponíveis são ${this.assentoDisp} `)
    }
}