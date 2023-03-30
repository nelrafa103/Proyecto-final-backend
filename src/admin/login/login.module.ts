import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from './login.controller';
import { Login } from './login.model';
import { LoginService } from './login.service';


@Module({
   imports: [
      TypeOrmModule.forFeature([ Login]),
   ],
   exports: [LoginService],
   controllers: [LoginController],
   providers: [LoginService]
})
export class LoginModule { }

 
