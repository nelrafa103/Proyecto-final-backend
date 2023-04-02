import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { LoginModule } from './login/login.module';
import { LoginService } from './login/login.service';
import { ProveedorModule } from './proveedor/proveedor.module';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';

@Module({
  controllers: [LoginController, AdminController],
   
  imports: [AdminModule, ProveedorModule,LoginModule],
   
  providers: [AdminService],
  
})
export class AdminModule {}
