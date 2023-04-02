import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginInput } from './login.interface';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService){}

  @Post('signIn')
  async authenticate(@Body() signInDto: LoginInput) {
     if(this.loginService.getAdminbyNamePass(signInDto.Nombre,signInDto.Contraseña) != null) {
        return {signInDto}
     }
  }
}
