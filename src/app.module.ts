import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './cliente/cliente.module';
import { AdminModule } from './admin/admin.module';
import { ProductosModule } from './productos/productos.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { LoginModule } from './admin/login/login.module';
import { ProveedorModule } from './admin/proveedor/proveedor.module';
import configuracion from '../config/configuration';
import { Cliente } from './cliente/cliente.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: configuracion()['local']['docker']['port'],
      username: configuracion()['local']['docker']['user'],
      password: configuracion()['local']['docker']['password'],
      database: 'sys',
      entities: [Cliente],
      synchronize: true,
    }),
    ClienteModule,
    AdminModule,
    ProductosModule,
    LoginModule,
    ProveedorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
