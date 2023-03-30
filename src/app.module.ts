import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './cliente/cliente.module';
import { AdminModule } from './admin/admin.module';
import { ProductosModule } from './productos/productos.module';

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
  ],
})
export class AppModule {}
