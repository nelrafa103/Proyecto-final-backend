import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { appendFile } from 'fs';
import { ClienteInput, ClienteOutput } from './cliente.interface';
import { sign } from 'crypto';
import { Resolver } from 'dns';
import { FacturaService } from 'src/productos/Servicios/factura.service';
import { Factura } from 'src/productos/Categorias/factura.model';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService,
    private readonly facturaService: FacturaService) {}

  // Obtener por Id
  @Get(':id')
  async getById(@Param('id') id: number) {
    const cliente = await this.clienteService.findById(id);
    //  console.log(cliente)
    if (!cliente) {
      throw new NotFoundException('Cliente no encontrado');
    }
    return { cliente };
  }
  // Obtener registro por nombre
  @Post('nombre')
  async getByNandA(@Body() signInDto: ClienteOutput) {
    const cliente = await this.clienteService.findbyN(signInDto.Nombre);
    //   console.log(nombre)
    if (!cliente) {
      throw new NotFoundException(
        'Cliente no encontrado por su nombre y apellido',
      );
    }
    return { cliente };
  }
  // Obtener todos los clientes
  @Get()
  async getAllCliente() {
    const clientes = await this.clienteService.getAllClientes();
    if (!clientes) {
      throw new NotFoundException('No hay clientes en la tabla');
    }
   /* let productos: Array<any> = []
    clientes.forEach((element,index) => {
     productos.push(this.facturaService.getFacturabyId({Id:element.Id_Cliente}))
    })*/
   // 
    return { 
    clientes,
    columnas: [
      'Id',
       "Nombre",
       "Apellido",
       "Telefono",
       'Id',
      'Total',
      'Fecha'
    ]};
  }
  // Añadir nuevo cliente
  @Post('new')
  async createNewUser(@Body() signInDto: ClienteInput) {
    const nuevoCliente = await this.clienteService.signUpCliente(signInDto);
    if (!nuevoCliente) {
      throw new NotFoundException('El cliente no se ha podido crear');
    }
    return { nuevoCliente };
  }

  @Put('update')
  async updateUser(@Body() signInDto: ClienteInput) {
    const modCliente = await this.clienteService.updateCliente(signInDto);
    if (!modCliente) {
      throw new Error('No se ha podido actualizar el cliente');
    }
    return { modCliente };
  }
}
