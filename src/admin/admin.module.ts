import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { LoginModule } from './login/login.module';
import { LoginService } from './login/login.service';
import { ProveedorModule } from './proveedor/proveedor.module';

@Module({
  controllers: [LoginController],
   
  imports: [AdminModule, ProveedorModule,LoginModule],
  
})
export class AdminModule {}
