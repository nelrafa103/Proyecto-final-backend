import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from './login.controller';
import { Login } from './login.model';
import { LoginService } from './login.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Login])],
  exports: [LoginService, JwtService],
  controllers: [LoginController],
  providers: [LoginService, JwtService],
})
export class LoginModule {}
