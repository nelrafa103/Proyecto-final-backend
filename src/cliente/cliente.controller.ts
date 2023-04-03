import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { appendFile } from 'fs';
import { ClienteInput } from './cliente.interface';

@Controller('cliente')
export class ClienteController {
   constructor(private readonly clienteService: ClienteService) {
   }


   @Get(':id')
   async getById(@Param('id') id: number) {
      const cliente = await this.clienteService.findById(id)
     // console.log(cliente)
      if(!cliente) {
         throw new NotFoundException('Cliente no encontrado')
      }
         return {cliente}
   }

   @Get(':NandA')
   async getByNandA(@Param('nombre') n: string,@Param('apellido') a: string) {
      const cliente = await this.clienteService.findbyNandA({nombre: n, apellido: a})

      if(!cliente) {
         throw new NotFoundException('Cliente no encontrado por su nombre y apellido')
      }
         return {cliente}
   }

  @Get('All')
  async getAllCliente() {
   return await this.clienteService.getAllClientes()
  }

  @Post('newClient') 
  async createNewUser(@Body() signInDto: ClienteInput) {
   const nuevoCliente = await this.clienteService.signUpCliente(signInDto)
   if(!nuevoCliente) {
      throw new NotFoundException('El cliente no se ha podido crear')
   }
   return {nuevoCliente}
  }

}
