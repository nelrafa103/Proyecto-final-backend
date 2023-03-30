import { Controller, Get } from '@nestjs/common';
import { Proveedor } from './proveedor.model';
import { ProveedorService } from './proveedor.service';

@Controller('proveedor')
export class ProveedorController {
   constructor(private readonly ProveedorService: ProveedorService) {}

   @Get()
   getHello() {
    // return this.appService.getAllProviders();
   }
}
