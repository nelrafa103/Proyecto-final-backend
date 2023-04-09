import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import { Cliente } from './cliente.model';
import { ClienteService } from './cliente.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  exports: [ClienteService],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
