import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../service/produto.service";

@ApiTags('Usuario')
@Controller('/usuario')
@ApiBearerAuth()
    export class UsuarioController{
        constructor (private readonly usuarioService: UsuarioService) {}
    
        @UseGuards(JwtAuthGuard)
        @Get('/all')
        @HttpCode(HttpStatus.OK)
        findAll (): Promise<Usuario[]> {
            return this.usuarioService.findAll();
        }
       
      
        @Post('/cadastrar')
        @HttpCode(HttpStatus.CREATED)
        async create(@Body() usuario: Usuario): Promise<Usuario>{
            return this.usuarioService.create(usuario)
        }
    
        @UseGuards(JwtAuthGuard)
        @Put('/atualizar')
        @HttpCode(HttpStatus.OK)
        async update(@Body() usuario: Usuario): Promise<Usuario>{
            return this.usuarioService.update(usuario)
        }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
