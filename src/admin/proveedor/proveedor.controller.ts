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
import { AlmacenService } from 'src/productos/Servicios/almacen.service';

@Controller('proveedor')
export class ProveedorController {
  constructor(
    private readonly ProveedorService: ProveedorService,
    private readonly almacenService: AlmacenService,
  ) {}

  @Get()
  async getAllProviders() {
    
    const proveedor = await this.ProveedorService.getAllProveedor();
    let productos: Array<any>;
   /* proveedor.forEach((element) => {
      productos.push(
        this.almacenService.getAdquisicionesbyId({ Id: element.Id }),
      );
    }); */
    return {
      proveedor,
    
      columnas: ['Nombre', 'Apellido','Precio','Cantidad comprada','Precio de Compra', 'Id del Producto' ],
    };
  }

  /*/*
    
   SELECT Nombre,Apellido,Pr.Precio,A.Cantidad,A.Compra,A.Id_Producto FROM Proveedor as P
   Join Adquisiones as A on A.Id_Proveedor = P.Id_Proveedor
   Join Producto as Pr on Pr.Id_Producto = A.Id_Producto
*/ 
  @Post('new')
  async insertNewProveedor(@Body() signInDto: ProveedorInput) {
    const nuevo = await this.ProveedorService.insertProveedor(signInDto);
    if (!nuevo) {
      throw new NotFoundException('El proveedor no se ha podido crear');
    }
    console.log(signInDto)
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
