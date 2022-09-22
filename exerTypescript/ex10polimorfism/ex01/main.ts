/**ATIVIDADE 1
Crie uma hierarquia de classes conforme abaixo com os seguintes atributos 
e comportamentos (observe a tabela), utilize os seus conhecimentos e 
distribua as características de forma que tudo o que for comum a todos os animais fique na classe Animal: 
 */
import { Preguica } from "./src/preguica";
import { Cachorro } from "./src/cachorro";
import { Cavalo } from "./src/cavalo";

let preguica1 = new Preguica("josh", "2 anos")
preguica1.verName()
preguica1.veridade()
preguica1.verSom()
preguica1.acao()

let cachorro1 = new Cachorro("Louis", "3 anos")
cachorro1.verName()
cachorro1.veridade()
cachorro1.verSom()
cachorro1.acao

let cavalo1 = new Cavalo("Jorge", "9 meses")
cavalo1.verName()
cavalo1.veridade()
cavalo1.verSom()
cavalo1.acao()