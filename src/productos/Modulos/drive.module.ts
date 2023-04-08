import { Module } from '@nestjs/common';
import { DiscoDuro } from '../Categorias/drive.model';
//import { DriveController } from '../Controladores/drive.controller';
import { DriveService } from '../Servicios/drive.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
   imports: [
     TypeOrmModule.forFeature([DiscoDuro]),
  ],
    controllers: [],
    exports: [DriveService],
   providers: [DriveService],
   
 })
export class DriveModule {}
