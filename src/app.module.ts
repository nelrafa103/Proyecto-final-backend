import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './cliente/cliente.module';
import { AdminModule } from './admin/admin.module';
import { ProductosModule } from './productos/productos.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { LoginService } from './admin/login/login.service';
import { LoginModule } from './admin/login/login.module';
import { ProveedorModule } from './admin/proveedor/proveedor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 33061,
      username: 'root',
      password: 'rootpas',
      database: 'mysql',
      entities: [],
      synchronize: true,
    }),
    ClienteModule,
    AdminModule,
    ProductosModule,
    LoginModule,
    ProveedorModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
