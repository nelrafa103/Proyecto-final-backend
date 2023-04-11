import { Module } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { ProveedorController } from './proveedor.controller';
import { Proveedor } from './proveedor.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Adquisiciones } from 'src/productos/Auxiliares/adquisiones.model';
import { AlmacenService } from 'src/productos/Servicios/almacen.service';

@Module({
  imports: [TypeOrmModule.forFeature([Proveedor,Adquisiciones])],
  exports: [ProveedorService],
  providers: [ProveedorService,AlmacenService],
  controllers: [ProveedorController],
})
export class ProveedorModule {}
