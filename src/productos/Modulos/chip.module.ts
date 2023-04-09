import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { Tarjeta } from '../Categorias/motherboard.model';
//import { ChipController } from '../Controladores/chip.controller';
import { ChipService } from '../Servicios/chip.service';
import { Procesador } from '../Categorias/procesor.model';

@Module({
  imports: [TypeOrmModule.forFeature([Procesador])],
  controllers: [],
  exports: [ChipService],
  providers: [ChipService],
})
export class ChipModule {}
