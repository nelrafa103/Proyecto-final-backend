import {
  Body,
  Controller,
  Get,
  Head,
  Header,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginInput } from './login.interface';
import { JwtService } from '@nestjs/jwt';

@Controller('login')
export class LoginController {
  constructor(
    private readonly loginService: LoginService,
    private readonly jwtService: JwtService,
  ) {}

  @Post()
  @Header('Access-Control-Allow-Origin', '*')
  @Header('Access-Control-Allow-Methods', '*')
  @Header('Access-Control-Allow-Credentials', 'false')
  async authenticate(@Body() signInDto: LoginInput) {
    // Es necesario devolver junto al usuario un token.

    const token = await this.loginService.getAdminbyNamePass(
      signInDto.Email,
      signInDto.Contraseña,
    );
    if (token.length == 0) {
      throw new NotFoundException('No hay un administrador que cumpla');
    }
  //  const hashpassword = await this.jwtService.sign(token);
    return { usuario: token };
  }
}
