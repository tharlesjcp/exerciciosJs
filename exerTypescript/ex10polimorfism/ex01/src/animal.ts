/**ATIVIDADE 1
Crie uma hierarquia de classes conforme abaixo com 
os seguintes atributos e comportamentos (observe a tabela), 
utilize os seus conhecimentos e distribua as características de forma que tudo o que for comum a todos os animais 
fique na classe Animal: 
 */
export class Animal{
//    familia: string;
    nome: string;
    idade: string;

    constructor(
        nome: string,
        idade: string,
    ){
        this.nome = nome
        this.idade = idade
    }
            verName(): void{

            }
           veridade(): void{

            }
            som() : void{

            }

            correr(): void{

            }
            acao(): void{

            }
            

}