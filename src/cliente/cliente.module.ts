import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import { Cliente } from './cliente.model';
import { ClienteService } from './cliente.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factura } from 'src/productos/Categorias/factura.model';
import { FacturaService } from 'src/productos/Servicios/factura.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente,Factura])],
  exports: [ClienteService],
  controllers: [ClienteController],
  providers: [ClienteService,FacturaService],
})
export class ClienteModule {}
