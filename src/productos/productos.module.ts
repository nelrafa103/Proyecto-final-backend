import { Module } from '@nestjs/common';
import { ChipModule } from './Modulos/chip.module';
import { MotherboardModule } from './Modulos/motherboard.module';
import { DriveModule } from './Modulos/drive.module';
import { RamModule } from './Modulos/ram.module';
import { Producto } from './producto.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { TipoService } from './Servicios/tipo.service';
import { Tipo } from './Auxiliares/Tipo.model';
import { Marca } from './Auxiliares/marca.model';
import { MarcaService } from './Servicios/marca.service';
@Module({
   imports: [
     TypeOrmModule.forFeature([ Producto, Marca, Tipo]),
     ChipModule, MotherboardModule,DriveModule,RamModule
  ],
    controllers: [ProductoController],
    exports: [ProductoService],
   providers: [ProductoService,TipoService,MarcaService],
   
 })
export class ProductosModule {}
