import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Login } from './login.model';
import { normalize } from 'path';

@Injectable()
export class LoginService {
   constructor(
      @InjectRepository(Login)
      private LoginRepository: Repository<Login>,
    ) {}
  
   getAdminbyNamePass(email:string,password:string) {
      /* return  this.LoginRepository.findOneBy({
        Nombre: nombre ,
        Contraseña: password
       }); */
       return this.LoginRepository.query(`SELECT nombre,apellido FROM admin WHERE email = '${email}' AND password = '${password}';
       `)
    }

      
}
