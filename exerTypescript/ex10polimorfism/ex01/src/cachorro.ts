/**ATIVIDADE 1
Crie uma hierarquia de classes conforme abaixo com 
os seguintes atributos e comportamentos (observe a tabela), 
utilize os seus conhecimentos e distribua as características de forma que tudo o que for comum a todos os animais 
fique na classe Animal: 
 */
import { Animal } from "./animal";

export class Cachorro extends Animal{

    constructor(
        nome: string,
        idade: string,
    ){
        super(nome, idade);
    }
    verName(): void {
        console.log(`O nome do cachorro é: ${this.nome}`)
    }
    veridade(): void {
        console.log(`Idade: ${this.idade} anos`)
    }
    verSom(): void {
        console.log(`Este cachorro late AuAu`)
    }
    correr(): void {
        console.log(`O cachorro corre com as quatro patas`)
    }
}