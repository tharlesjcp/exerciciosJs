import { IsNotEmpty, MaxLength } from "class-validator";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"tb_categoria"})
    export class Categoria{

        @PrimaryGeneratedColumn()
            id: number
        
        @IsNotEmpty()
        @MaxLength(60)
        @Column({length: 255, nullable:false})
            nome: string
        
        @Column({default: false})
            doacao: boolean
   
    @OneToMany(() => Produto, (Produto) => Produto.categoria,{
        onDelete: "CASCADE"
    })
    produto: Produto[]

    }