import { Module } from '@nestjs/common';
import { Tarjeta } from '../Categorias/motherboard.model';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { MotherboardController } from '../Controladores/motherboard.controller';
import { MotheboardService } from '../Servicios/motheboard.service';

@Module({
   imports: [
     TypeOrmModule.forFeature([Tarjeta]),
  ],
    controllers: [],
    exports: [MotheboardService],
   providers: [MotheboardService],
   
 })
export class MotherboardModule {}
