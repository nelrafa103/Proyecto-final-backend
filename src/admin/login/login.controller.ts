import { Body, Controller, Get, NotFoundException, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginInput } from './login.interface';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService){}

  @Post('signIn')
  async authenticate(@Body() signInDto: LoginInput) {
   // Es necesario devolver junto al usuario un token. 
     const token = this.loginService.getAdminbyNamePass(signInDto.Nombre,signInDto.Contraseña)
     if(!token) {
       throw new NotFoundException("No hay un administrador que cumpla");
     }
     return {signInDto}
  }
}
