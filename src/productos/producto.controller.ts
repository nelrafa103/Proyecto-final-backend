
import { Body, Controller, Get, NotFoundException, Post } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoInput } from './producto.interface';
import { MarcaService } from './Servicios/marca.service';
import { TipoService } from './Servicios/tipo.service';
import { MarcaInput } from './Interfaz/marca.interface';
import { ModeloInput } from './Interfaz/modelo.interface';
import { TipoInput } from './Interfaz/tipo.interface';
//import
@Controller('producto')
export class ProductoController {
   constructor(private readonly productoService: ProductoService,
      private readonly marcaService: MarcaService,
      private readonly tipoService: TipoService) {
   }

   @Post('new')
   async createNewProduct(@Body() entrada: ProductoInput) {
    const marca = await this.marcaService.GetById({Id: entrada.Id_Marca})
    const tipo = await this.tipoService.GetById({Id:entrada.Id_Tipo})
    console.log(tipo)
    if(marca.length == 0) {
      return new NotFoundException('No existe una marca con ese Id ')
    }
    if(tipo.length == 0) {
    
     throw new NotFoundException('No existe un tipo con ese Id')
      
    }
   const nuevo = await this.productoService.insertProducto(entrada)
   if(!nuevo) {
      return new NotFoundException('No se podido crear un nuevo producto')
    }
    return {nuevo} 
   }

   @Post('marca')
   createMarca(@Body() entrada: MarcaInput) {
     this.marcaService.insertMarca({Nombre: entrada.Nombre})
   }


   @Post('modelo')
   createModelo(@Body() entrada: ModeloInput) {
     
   }

   @Post('tipo')
   createTipo(@Body() entrada: TipoInput) {
      this.tipoService.insertTipo({Nombre: entrada.Nombre})
   }


}





