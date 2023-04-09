import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Proveedor } from './proveedor.model';
import { ProveedorService } from './proveedor.service';
import { ProveedorInput } from './Proveedor.interface';

@Controller('proveedor')
export class ProveedorController {
  constructor(private readonly ProveedorService: ProveedorService) {}

  @Get()
  getAllProviders() {
    return this.ProveedorService.getAllProveedor();
  }

  @Post('new')
  insertNewProveedor(@Body() signInDto: ProveedorInput) {
    const nuevo = this.ProveedorService.insertProveedor(signInDto);
    if (!nuevo) {
      throw new NotFoundException('El proveedor no se ha podido crear');
    }
    return { nuevo };
  }

  @Put('update')
  updateProveedorById(@Body() signInDto: ProveedorInput) {
    const nuevo = this.ProveedorService.updateProveedor(signInDto);
    if (!nuevo) {
      throw new NotFoundException('El proveedor no se podido actualizar');
    }
    return { nuevo };
  }

  @Get(':id')
  getProveedorById(@Param('id') id: number) {
    const proveedor = this.ProveedorService.getProveedorById(id);
    if (!proveedor) {
      throw new NotFoundException('El proveedor no se podido encontrar');
    }
    return { proveedor };
  }
  @Get('NandA')
  getProveedorByNombreApellido(@Body() signInDto: ProveedorInput) {
    const nuevo = this.ProveedorService.getProveedorByNandA({
      Nombre: signInDto.Nombre,
      Apellido: signInDto.Apellido,
    });
    if (!nuevo) {
      throw new NotFoundException('El proveedor no se podido encontrar');
    }
    return { nuevo };
  }
  @Put(':id')
  deleteProveedorbyId(@Param('id') id: number) {
    const nuevo = this.ProveedorService.deleteProveedorById(id);
    if (!nuevo) {
      throw new NotFoundException('El proveedor no se podido borrar');
    }
    return { nuevo };
  }
}
