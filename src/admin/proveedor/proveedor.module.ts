import { Module } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { ProveedorController } from './proveedor.controller';
import { Proveedor } from './proveedor.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Proveedor])],
  exports: [ProveedorService],
  providers: [ProveedorService],
  controllers: [ProveedorController],
})
export class ProveedorModule {}
