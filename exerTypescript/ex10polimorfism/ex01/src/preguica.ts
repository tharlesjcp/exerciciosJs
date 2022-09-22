import { Animal } from "./animal";

/**ATIVIDADE 1
Crie uma hierarquia de classes conforme abaixo com 
os seguintes atributos e comportamentos (observe a tabela), 
utilize os seus conhecimentos e distribua as características de forma que tudo o que for comum a todos os animais 
fique na classe Animal: 
 */
export class Preguica extends Animal{

    constructor(

        nome: string,
        idade: string,
    ){
        super(nome, idade);
    }
    verName(): void {
        console.log(`O nome da preguiça é: ${this.nome}`)
    }
    veridade(): void {
        console.log(`Idade: ${this.idade} anos`)
    }
    verSom(): void {
        console.log(`Imagina um som bem bonito pra dona preguiça(não sei som de preguiça)`)
    }
    correr(): void {
        console.log(`Esta preguiça sobe em àrvores`)
    }
}

