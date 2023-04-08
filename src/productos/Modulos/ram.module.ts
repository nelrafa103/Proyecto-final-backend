import { Module } from '@nestjs/common';
import { Ram } from '../Categorias/ram.model';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { RamController } from '../Controladores/ram.controller';
import { RamService } from '../Servicios/ram.service';

@Module({
   imports: [
     TypeOrmModule.forFeature([Ram]),
  ],
    controllers: [],
    exports: [RamService],
   providers: [RamService],
   
 })
export class RamModule {}
