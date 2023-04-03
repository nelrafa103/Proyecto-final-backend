import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { LoginModule } from './login/login.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './admin.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([ Admin]),
    AdminModule, ProveedorModule,LoginModule
 ],
   controllers: [LoginController, AdminController],
   exports: [AdminService],
  providers: [AdminService],
  
})
export class AdminModule {}
