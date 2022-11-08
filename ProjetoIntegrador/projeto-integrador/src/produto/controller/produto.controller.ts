import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "../service/produto.service";

@Controller('/produto')
    export class ProdutoController{
        constructor (private readonly produtoService: ProdutoService) {}
    

@Get()
@HttpCode(HttpStatus.OK)
findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
}

@Get('/:id')
@HttpCode(HttpStatus.OK)
findById(@Param('id', ParseIntPipe) id: number): Promise<Produto>{
    return this.produtoService.findById(id)
}
@Get('/nome/:nome')
@HttpCode(HttpStatus.OK)
findByNome(@Param('nome') nome: string): Promise<Produto[]>{
    return this.produtoService.findByNome(nome)
}
@Get('/preco/:preco')
    @HttpCode(HttpStatus.OK)
    findByPreco(@Param('preco') preco: number): Promise<Produto[]>{
        return this.produtoService.findByPreco(preco)
    }
@Get('/disponibilidade/:disponibilidade')
@HttpCode(HttpStatus.OK)
findByDisponibilidade(@Param('disponibilidade') disponibilidade: boolean): Promise<Produto>{
    return this.produtoService.findByDisponibilidade(disponibilidade)
}
@Get('/reutilizavel/:reutilizavel')
@HttpCode(HttpStatus.OK)
findByReutilizavel(@Param('reutilizavel') reutilizavel: boolean): Promise<Produto>{
    return this.produtoService.findByReutilizavel(reutilizavel)
}

@Post()
@HttpCode(HttpStatus.CREATED)
create(@Body() produto: Produto): Promise<Produto>{
    return this.produtoService.create(produto)
}

@Put('/:id')
@HttpCode(HttpStatus.OK)
update(@Body() produto: Produto): Promise<Produto>{
    return this.produtoService.update(produto)
}
@Delete('/:id')
@HttpCode(HttpStatus.NO_CONTENT)
delete(@Param('id', ParseIntPipe) id: number) {
    return this.produtoService.delete(id)
}

}