import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Login } from './login.model';

@Injectable()
export class LoginService {
   constructor(
      @InjectRepository(Login)
      private LoginRepository: Repository<Login>,
    ) {}
  
   getAdminbyNamePass(nombre:string,password:string) {
       return  this.LoginRepository.findOneBy({
        Nombre: nombre ,
        Contraseña: password
       });
    }

      
}
